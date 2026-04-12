const data = window.siteData;

const byId = (id) => document.getElementById(id);

function createLink(link, className = "button") {
  const a = document.createElement("a");
  a.className = className + (link.primary ? " primary" : "");
  a.textContent = link.label;
  a.href = link.href;
  if (link.disabled) {
    a.classList.add("disabled");
    a.href = "#";
    a.setAttribute("aria-disabled", "true");
  }
  if (link.href.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noreferrer";
  }
  return a;
}

function fillHero() {
  document.title = `${data.name} | Research`;
  byId("brand-name").textContent = data.name;
  const nameParts = data.name.split(" ");
  const firstName = nameParts.shift() || data.name;
  const lastName = nameParts.join(" ");
  byId("hero-name").innerHTML = lastName
    ? `<span class="hero-name-line">${firstName}</span><span class="hero-name-line hero-name-surname">${lastName}</span>`
    : `<span class="hero-name-line">${firstName}</span>`;
  byId("hero-role").textContent = data.role;
  byId("hero-summary").textContent = data.heroSummary;
  byId("hero-photo").src = data.photo;
  byId("hero-photo").alt = `${data.name} portrait`;
  const institutionLink = byId("institution-link");
  institutionLink.textContent = data.institution;
  institutionLink.href = data.institutionUrl;
  byId("hero-location").textContent = data.location;

  byId("contact-text").textContent = data.contact;
  const lastUpdated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  byId("footer-text").textContent = `${data.footer} | Last updated: ${lastUpdated}`;
  document.querySelector(".brand-mark").textContent = data.name.charAt(0).toUpperCase();
}

function renderNavigation() {
  const nav = byId("site-nav");
  data.navigation.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    link.dataset.section = item.href.replace("#", "");
    nav.appendChild(link);
  });
}

function renderLinks() {
  const hero = byId("hero-actions");
  const contact = byId("contact-actions");
  data.links.forEach((link) => hero.appendChild(createLink(link)));
  contact.appendChild(createLink({ label: data.email, href: `mailto:${data.email}`, primary: true }));
  data.links
    .filter((link) => !link.primary && !link.disabled)
    .forEach((link) => contact.appendChild(createLink(link)));
}

function renderStats() {
  const target = byId("stats-grid");
  data.stats.forEach((stat) => {
    const card = document.createElement("article");
    card.className = "stat-card";
    card.innerHTML = `<strong>${stat.value}</strong><span>${stat.label}</span>`;
    target.appendChild(card);
  });
}

function renderAbout() {
  const target = byId("about-copy");
  data.intro.forEach((paragraph, index) => {
    const p = document.createElement("p");
    if (index === 0) {
      const institutionAnchor = `<a href="${data.institutionUrl}" target="_blank" rel="noreferrer">${data.institution}</a>`;
      const supervisorAnchor = `<a href="${data.supervisor.href}" target="_blank" rel="noreferrer">${data.supervisor.name}</a>`;
      p.innerHTML = paragraph
        .replace(data.institution, institutionAnchor)
        .replace(data.supervisor.name, supervisorAnchor);
    } else {
      p.textContent = paragraph;
    }
    target.appendChild(p);
  });
}

function renderKeywords() {
  const target = byId("keyword-list");
  data.focusAreas.forEach((area) => {
    const item = document.createElement("span");
    item.className = "keyword";
    item.textContent = area;
    target.appendChild(item);
  });
}

function openCitation(item) {
  byId("citation-title").textContent = item.title;
  byId("citation-code").textContent = item.bibtex;
  byId("citation-modal").showModal();
}

function renderPublications() {
  const target = byId("publication-grid");
  const selected = data.publications.filter((item) => data.selectedPublications.includes(item.slug));
  selected.forEach((item) => {
    const card = document.createElement("article");
    card.className = "publication-card";
    const articleHref = `article.html?slug=${encodeURIComponent(item.slug)}`;
    const pdfHref = item.pdf
      ? `viewer.html?file=${encodeURIComponent(item.pdf)}&title=${encodeURIComponent(item.title)}`
      : "";
    card.innerHTML = `
      ${item.figure ? `<div class="publication-image"><img src="${item.figure}" alt="${item.title}"></div>` : ""}
      <div class="publication-top">
        <span class="publication-venue">${item.venue}</span>
      </div>
      <div class="publication-body">
        <h3>${item.title}</h3>
        <p class="publication-authors">${item.authors}</p>
        <p>${item.summary}</p>
      </div>
      <div class="publication-actions">
        <a class="button primary disabled" href="#" aria-disabled="true">Read More</a>
        ${item.pdf ? `<a class="button" href="${pdfHref}">View PDF</a>` : ""}
        <button class="button cite-button" type="button">Cite</button>
      </div>
    `;
    card.querySelector(".cite-button").addEventListener("click", () => openCitation(item));
    target.appendChild(card);
  });
}

function renderList(id, items) {
  const target = byId(id);
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "info-item";
    div.textContent = item;
    target.appendChild(div);
  });
}

function setupCitationModal() {
  byId("citation-close").addEventListener("click", () => byId("citation-modal").close());
  byId("citation-copy").addEventListener("click", async () => {
    await navigator.clipboard.writeText(byId("citation-code").textContent);
    byId("citation-copy").textContent = "Copied";
    setTimeout(() => {
      byId("citation-copy").textContent = "Copy BibTeX";
    }, 1200);
  });
}

function highlightActiveSection() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".site-nav a")];
  if (!sections.length || !links.length) {
    return;
  }

  function setActive(id) {
    links.forEach((link) => {
      link.classList.toggle("active", link.dataset.section === id);
    });
  }

  function updateActiveSection() {
    const header = document.querySelector(".site-header");
    const headerOffset = (header ? header.getBoundingClientRect().height : 0) + 24;
    const scrollPosition = window.scrollY + headerOffset;

    let activeId = sections[0].id;
    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        activeId = section.id;
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      activeId = sections[sections.length - 1].id;
    }

    setActive(activeId);
  }

  let ticking = false;
  function onScroll() {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActiveSection();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateActiveSection);
  updateActiveSection();
}

fillHero();
renderNavigation();
renderLinks();
renderStats();
renderAbout();
renderKeywords();
renderPublications();
renderList("education-list", data.experience.education);
renderList("research-list", data.experience.research);
renderList("professional-list", data.experience.professional);
renderList("leadership-list", data.experience.leadership);
setupCitationModal();
highlightActiveSection();




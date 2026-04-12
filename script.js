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
    const pdfHref = item.pdf
      ? `viewer.html?file=${encodeURIComponent(item.pdf)}&title=${encodeURIComponent(item.title)}`
      : "";
    const githubUrl = item.github || item.code;
    const githubButton = githubUrl
      ? `<a class="button icon-link" href="${githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub repository for ${item.title}" title="Code repository">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.66-.22.66-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.93c.85 0 1.71.12 2.51.35 1.9-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.81-4.58 5.07.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.67.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"></path>
          </svg>
          <span>Code</span>
        </a>`
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
        ${githubButton}
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





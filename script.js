const pdfjsLib = window["pdfjs-dist/build/pdf"];

if (pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.7.76/pdf.worker.min.js";
}

const data = window.siteData;
const byId = (id) => document.getElementById(id);

function createLink(link, className = "button") {
  const anchor = document.createElement("a");
  anchor.className = className + (link.primary ? " primary" : "");
  anchor.textContent = link.label;

  if (link.disabled) {
    anchor.href = "#";
    anchor.classList.add("disabled");
    anchor.setAttribute("aria-disabled", "true");
    return anchor;
  }

  anchor.href = link.href;

  if (link.href.startsWith("http")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }

  return anchor;
}

function fillHero() {
  document.title = `${data.name} | Research`;
  byId("brand-name").textContent = data.name;
  document.querySelector(".brand-mark").textContent = data.name.charAt(0).toUpperCase();
  byId("hero-role").textContent = data.role;
  byId("hero-name").textContent = data.name;
  byId("hero-tagline").textContent = data.tagline;
  byId("hero-summary").textContent = data.summary;
  byId("contact-text").textContent = data.contact;
  byId("footer-text").textContent = data.footer;
}

function renderNavigation() {
  const nav = byId("site-nav");
  data.navigation.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    link.dataset.section = item.href.slice(1);
    nav.appendChild(link);
  });
}

function renderHeroActions() {
  const heroActions = byId("hero-actions");
  data.heroLinks.forEach((link) => heroActions.appendChild(createLink(link)));

  const contactActions = byId("contact-actions");
  contactActions.appendChild(
    createLink({ label: data.email, href: `mailto:${data.email}`, primary: true })
  );
  data.heroLinks
    .filter((link) => !link.primary && !link.disabled)
    .slice(0, 2)
    .forEach((link) => contactActions.appendChild(createLink(link)));
}

function renderHeroMeta() {
  const target = byId("hero-meta");
  [data.institution, data.location, "Robust visual modeling", "Image enhancement and restoration"].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function renderMetrics() {
  const target = byId("metrics-grid");
  data.metrics.forEach((metric) => {
    const card = document.createElement("article");
    card.className = "metric-card";
    card.innerHTML = `<strong>${metric.value}</strong><span>${metric.label}</span>`;
    target.appendChild(card);
  });
}

function renderAbout() {
  const block = byId("about-block");
  data.about.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    block.appendChild(p);
  });
}

function renderKeywords() {
  const target = byId("keywords");
  data.keywords.forEach((keyword) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = keyword;
    target.appendChild(chip);
  });
}

function buildCard(item, type) {
  const card = document.createElement("article");
  card.className = "article-card";
  const articleHref = `article.html?slug=${encodeURIComponent(item.slug)}&type=${type}`;
  const pdfHref = item.pdf
    ? `viewer.html?file=${encodeURIComponent(item.pdf)}&title=${encodeURIComponent(item.title)}`
    : "";

  card.innerHTML = `
    <div class="article-figure">
      <canvas class="pdf-thumb" data-pdf="${item.pdf || ""}" aria-label="${item.title} preview"></canvas>
      <div class="figure-overlay">
        <span class="figure-year">${item.year}</span>
      </div>
    </div>
    <div class="article-body">
      <p class="eyebrow article-kicker">${type === "story" ? "Research Theme" : "Publication"}</p>
      <h3>${item.title}</h3>
      <p class="venue">${item.subtitle || item.venue || ""}</p>
      ${item.authors ? `<p class="muted">${item.authors}</p>` : ""}
      <p>${item.cardText}</p>
      <div class="article-actions">
        <a class="button primary" href="${articleHref}">Read More</a>
        ${item.pdf ? `<a class="button" href="${pdfHref}">View PDF</a>` : ""}
        <button class="button cite-button" type="button">Cite</button>
      </div>
    </div>
  `;

  card.querySelector(".cite-button").addEventListener("click", () => openCitation(item));
  return card;
}

function renderResearch() {
  const target = byId("research-grid");
  data.researchStories.forEach((item) => target.appendChild(buildCard(item, "story")));
}

function renderPublications() {
  const target = byId("publications-list");
  data.publications.forEach((item) => target.appendChild(buildCard(item, "publication")));
}

function renderList(targetId, items) {
  const target = byId(targetId);
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "mini-item";
    card.textContent = item;
    target.appendChild(card);
  });
}

function openCitation(item) {
  const modal = byId("citation-modal");
  byId("citation-title").textContent = item.title;
  byId("citation-code").textContent = item.bibtex;
  modal.showModal();
}

function setupCitationModal() {
  const modal = byId("citation-modal");
  byId("citation-close").addEventListener("click", () => modal.close());
  byId("citation-copy").addEventListener("click", async () => {
    await navigator.clipboard.writeText(byId("citation-code").textContent);
    byId("citation-copy").textContent = "Copied";
    setTimeout(() => {
      byId("citation-copy").textContent = "Copy BibTeX";
    }, 1400);
  });
}

async function renderPdfThumbnail(canvas, pdfPath) {
  if (!pdfPath || !pdfjsLib) {
    canvas.parentElement.classList.add("no-preview");
    return;
  }

  try {
    const pdf = await pdfjsLib.getDocument(pdfPath).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 0.55 });
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: context, viewport }).promise;
  } catch {
    canvas.parentElement.classList.add("no-preview");
  }
}

function renderThumbs() {
  document.querySelectorAll(".pdf-thumb").forEach((canvas) => {
    renderPdfThumbnail(canvas, canvas.dataset.pdf);
  });
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function highlightActiveSection() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === entry.target.id);
        });
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
}

fillHero();
renderNavigation();
renderHeroActions();
renderHeroMeta();
renderMetrics();
renderAbout();
renderKeywords();
renderResearch();
renderPublications();
renderList("education-list", data.background.education);
renderList("experience-list", data.background.experience);
renderList("recognition-list", data.background.recognition);
setupCitationModal();
renderThumbs();
revealOnScroll();
highlightActiveSection();

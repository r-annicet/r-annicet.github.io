const data = window.siteData;

const byId = (id) => document.getElementById(id);

function createLink(link, className = "button") {
  const anchor = document.createElement("a");
  anchor.className = className + (link.primary ? " primary" : "");
  anchor.textContent = link.label;

  if (link.disabled) {
    anchor.href = "#";
    anchor.setAttribute("aria-disabled", "true");
    anchor.classList.add("disabled");
    return anchor;
  }

  anchor.href = link.href;

  if (link.href.startsWith("http")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }

  return anchor;
}

function fillText() {
  document.title = `${data.name} | Academic Portfolio`;
  document.querySelector(".brand-mark").textContent = data.name.charAt(0).toUpperCase();
  byId("brand-name").textContent = data.name;
  byId("hero-role").textContent = data.role;
  byId("hero-name").textContent = data.name;
  byId("hero-tagline").textContent = data.tagline;
  byId("hero-summary").textContent = data.summary;
  byId("focus-title").textContent = data.focus.title;
  byId("focus-description").textContent = data.focus.description;
  byId("about-text").textContent = data.about;
  byId("contact-text").textContent = data.contact;
  byId("footer-text").textContent = data.footer;
}

function renderNavigation() {
  const nav = byId("site-nav");

  data.navigation.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    nav.appendChild(link);
  });
}

function renderActions(targetId, links) {
  const target = byId(targetId);
  links.forEach((link) => target.appendChild(createLink(link)));
}

function renderMeta() {
  const meta = byId("hero-meta");
  const details = [data.institution, data.location, ...data.meta];

  details.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    meta.appendChild(li);
  });
}

function renderMetrics() {
  const grid = byId("metrics-grid");
  data.metrics.forEach((metric) => {
    const card = document.createElement("article");
    card.className = "metric-card";

    const value = document.createElement("strong");
    value.textContent = metric.value;

    const label = document.createElement("span");
    label.textContent = metric.label;

    card.append(value, label);
    grid.appendChild(card);
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

function renderHighlights() {
  const target = byId("highlights-grid");
  data.highlights.forEach((item) => {
    const card = document.createElement("article");
    card.className = "feature-card";
    card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
    target.appendChild(card);
  });
}

function renderPublications() {
  const target = byId("publications-list");

  data.publications.forEach((publication) => {
    const item = document.createElement("article");
    item.className = "stack-card";

    const linkMarkup = publication.links
      .map((link) =>
        link.href === "#"
          ? `<span class="inline-link muted">${link.label}</span>`
          : `<a class="inline-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
      )
      .join("");

    item.innerHTML = `
      <div class="stack-card-header">
        <div>
          <h3>${publication.title}</h3>
          <p class="muted">${publication.authors}</p>
          <p class="venue">${publication.venue}</p>
        </div>
      </div>
      <p>${publication.description}</p>
      <div class="inline-links">${linkMarkup}</div>
    `;

    target.appendChild(item);
  });
}

function renderTimeline() {
  const target = byId("timeline");
  data.experience.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `
      <span class="timeline-period">${entry.period}</span>
      <div class="timeline-card">
        <h3>${entry.title}</h3>
        <p class="venue">${entry.organization}</p>
        <p>${entry.text}</p>
      </div>
    `;
    target.appendChild(item);
  });
}

function renderStackList(targetId, items) {
  const target = byId(targetId);
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "stack-card";
    card.innerHTML = `
      <div class="stack-card-header">
        <h3>${item.title}</h3>
        <span class="tag">${item.meta}</span>
      </div>
      <p>${item.text}</p>
    `;
    target.appendChild(card);
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
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}

fillText();
renderNavigation();
renderActions("hero-actions", data.links);
renderActions("contact-actions", [
  { label: data.email, href: `mailto:${data.email}`, primary: true },
  ...data.links
    .filter((link) => !link.primary && link.label !== "Email Me" && !link.disabled)
    .slice(0, 2)
]);
renderMeta();
renderMetrics();
renderKeywords();
renderHighlights();
renderPublications();
renderTimeline();
renderStackList("teaching-list", data.teaching);
renderStackList("awards-list", data.awards);
revealOnScroll();

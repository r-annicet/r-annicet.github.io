const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const item = window.siteData.publications.find((entry) => entry.slug === slug);

function byId(id) {
  return document.getElementById(id);
}

function createLink(link, className = "button") {
  const a = document.createElement("a");
  a.className = className + (link.primary ? " primary" : "");
  a.textContent = link.label;
  a.href = link.href;
  return a;
}

function render() {
  if (!item) {
    document.body.innerHTML = "<p>Publication not found.</p>";
    return;
  }

  document.title = `${item.title} | ${window.siteData.name}`;
  byId("article-title").textContent = item.title;
  byId("article-meta").textContent = `${item.authors} · ${item.venue}`;

  const actions = byId("article-actions");
  if (item.pdf) {
    actions.appendChild(
      createLink({
        label: "View PDF",
        href: `viewer.html?file=${encodeURIComponent(item.pdf)}&title=${encodeURIComponent(item.title)}`,
        primary: true
      })
    );
  }
  const citeButton = document.createElement("button");
  citeButton.className = "button";
  citeButton.type = "button";
  citeButton.textContent = "Cite";
  citeButton.addEventListener("click", () => {
    byId("citation-title").textContent = item.title;
    byId("citation-code").textContent = item.bibtex;
    byId("citation-modal").showModal();
  });
  actions.appendChild(citeButton);

  const sections = byId("article-sections");
  item.sections.forEach((section) => {
    const card = document.createElement("article");
    card.className = "article-section-card";
    card.innerHTML = `<h2>${section.heading}</h2><p>${section.body}</p>`;
    sections.appendChild(card);
  });
}

render();

byId("citation-close").addEventListener("click", () => byId("citation-modal").close());
byId("citation-copy").addEventListener("click", async () => {
  await navigator.clipboard.writeText(byId("citation-code").textContent);
  byId("citation-copy").textContent = "Copied";
  setTimeout(() => {
    byId("citation-copy").textContent = "Copy BibTeX";
  }, 1200);
});

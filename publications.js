const data = window.siteData;

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

function openCitation(item) {
  byId("citation-title").textContent = item.title;
  byId("citation-code").textContent = item.bibtex;
  byId("citation-modal").showModal();
}

function renderList() {
  const target = byId("publication-list");
  data.publications.forEach((item) => {
    const article = document.createElement("article");
    article.className = "publication-list-item";
    const pdfLink = item.pdf
      ? `<a class="text-link" href="viewer.html?file=${encodeURIComponent(item.pdf)}&title=${encodeURIComponent(item.title)}">PDF</a>`
      : "";
    article.innerHTML = `
      <div class="publication-list-body">
        <h3>${item.title}</h3>
        <p class="publication-authors">${item.authors}</p>
        <p class="publication-list-meta">${item.venue}</p>
        <div class="publication-list-links">
          <span class="text-link disabled-text-link" aria-disabled="true">Read more</span>
          ${pdfLink}
          <button class="text-link as-button" type="button">Cite</button>
        </div>
      </div>
    `;
    article.querySelector(".as-button").addEventListener("click", () => openCitation(item));
    target.appendChild(article);
  });
}

renderList();

byId("citation-close").addEventListener("click", () => byId("citation-modal").close());
byId("citation-copy").addEventListener("click", async () => {
  await navigator.clipboard.writeText(byId("citation-code").textContent);
  byId("citation-copy").textContent = "Copied";
  setTimeout(() => {
    byId("citation-copy").textContent = "Copy BibTeX";
  }, 1200);
});

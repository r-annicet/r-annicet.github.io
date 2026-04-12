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
    const githubUrl = item.github || item.code;
    const codeLink = githubUrl
      ? `<a class="text-link icon-link" href="${githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub repository for ${item.title}" title="Code repository">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.66-.22.66-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.93c.85 0 1.71.12 2.51.35 1.9-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.81-4.58 5.07.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.67.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"></path>
          </svg>
          <span>Code</span>
        </a>`
      : "";
    const figureHtml = item.figure
      ? `
      <figure class="publication-list-figure">
        <img src="${item.figure}" alt="${item.title} figure" loading="lazy" />
      </figure>
      `
      : `
      <figure class="publication-list-figure publication-list-figure--placeholder" aria-hidden="true"></figure>
      `;
    article.innerHTML = `
      ${figureHtml}
      <div class="publication-list-body">
        <h3>${item.title}</h3>
        <p class="publication-authors">${item.authors}</p>
        <p class="publication-list-meta">${item.venue}</p>
        <div class="publication-list-links">
          <span class="text-link disabled-text-link" aria-disabled="true">Read more</span>
          ${pdfLink}
          ${codeLink}
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


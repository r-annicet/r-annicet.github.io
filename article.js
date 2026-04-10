const pdfjsLib = window["pdfjs-dist/build/pdf"];

if (pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.7.76/pdf.worker.min.js";
}

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const type = params.get("type");
const data = window.siteData;
const pool = type === "story" ? data.researchStories : data.publications;
const item = pool.find((entry) => entry.slug === slug);

function byId(id) {
  return document.getElementById(id);
}

function createLink(link, className = "button") {
  const anchor = document.createElement("a");
  anchor.className = className + (link.primary ? " primary" : "");
  anchor.textContent = link.label;
  anchor.href = link.href;
  if (link.href.startsWith("http")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  return anchor;
}

async function renderThumb() {
  const canvas = byId("article-thumb");
  if (!item || !item.pdf || !pdfjsLib) {
    canvas.parentElement.classList.add("no-preview");
    return;
  }

  try {
    const pdf = await pdfjsLib.getDocument(item.pdf).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1 });
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: context, viewport }).promise;
  } catch {
    canvas.parentElement.classList.add("no-preview");
  }
}

function openCitation() {
  byId("citation-title").textContent = item.title;
  byId("citation-code").textContent = item.bibtex;
  byId("citation-modal").showModal();
}

function renderArticle() {
  if (!item) {
    document.body.innerHTML = "<p>Article not found.</p>";
    return;
  }

  document.title = `${item.title} | ${data.name}`;
  byId("article-type").textContent = type === "story" ? "Research Theme" : "Publication";
  byId("article-title").textContent = item.title;
  byId("article-meta").textContent = item.subtitle || item.venue || item.authors || "";
  byId("article-intro").textContent = item.cardText;

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
  citeButton.addEventListener("click", openCitation);
  actions.appendChild(citeButton);

  const sections = byId("article-sections");
  item.sections.forEach((section) => {
    const article = document.createElement("article");
    article.className = "stack-card article-section-card";
    article.innerHTML = `<h2>${section.heading}</h2><p>${section.body}</p>`;
    sections.appendChild(article);
  });
}

renderArticle();
renderThumb();
byId("citation-copy").addEventListener("click", async () => {
  await navigator.clipboard.writeText(byId("citation-code").textContent);
  byId("citation-copy").textContent = "Copied";
  setTimeout(() => {
    byId("citation-copy").textContent = "Copy BibTeX";
  }, 1400);
});
byId("citation-close").addEventListener("click", () => byId("citation-modal").close());

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

function buildVisualSection(title, imageSrc, caption, placeholderLabel, variant) {
  const section = document.createElement("article");
  section.className = "paper-visual-card";

  const heading = document.createElement("div");
  heading.className = "paper-visual-heading";
  heading.innerHTML = `<p class="eyebrow">${title}</p>`;

  const figure = document.createElement("figure");
  figure.className = `paper-visual-frame ${variant}`;

  if (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = title;
    figure.appendChild(img);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = `paper-visual-placeholder ${variant}`;
    placeholder.innerHTML = `
      <div class="placeholder-badge">${placeholderLabel}</div>
      <div class="placeholder-surface">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    figure.appendChild(placeholder);
  }

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = caption;
  figure.appendChild(figcaption);

  section.appendChild(heading);
  section.appendChild(figure);
  return section;
}

function render() {
  if (!item) {
    document.body.innerHTML = "<p>Publication not found.</p>";
    return;
  }

  document.title = `${item.title} | ${window.siteData.name}`;
  byId("article-title").textContent = item.title;
  byId("article-meta").textContent = `${item.authors} - ${item.venue}`;
  byId("article-takeaway").textContent = item.summary || "Short paper takeaway placeholder.";
  byId("article-abstract").textContent =
    item.abstract ||
    "Abstract placeholder. This space will later contain the real abstract of the paper so readers can understand the problem, core contribution, and scope before moving to the figures.";

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

  const visuals = byId("article-visuals");
  visuals.appendChild(
    buildVisualSection(
      "Pipeline",
      item.pipelineFigure || "",
      item.pipelineCaption || "Pipeline caption placeholder. This will describe the method overview and the main processing flow.",
      "Pipeline figure placeholder",
      "pipeline"
    )
  );
  visuals.appendChild(
    buildVisualSection(
      "Qualitative comparison",
      item.qualFigure || "",
      item.qualCaption ||
        "Qualitative comparison caption placeholder. This will explain the visual differences between the proposed method and comparison methods.",
      "Qualitative comparison placeholder",
      "qualitative"
    )
  );
  visuals.appendChild(
    buildVisualSection(
      "Quantitative comparison",
      item.quantFigure || "",
      item.quantCaption ||
        "Quantitative comparison caption placeholder. This will summarize the main numerical results or table-based comparison.",
      "Quantitative table placeholder",
      "quantitative"
    )
  );
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

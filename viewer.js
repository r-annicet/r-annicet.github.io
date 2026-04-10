const pdfjsLib = window["pdfjs-dist/build/pdf"];

if (pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.7.76/pdf.worker.min.js";
}

const params = new URLSearchParams(window.location.search);
const file = params.get("file");
const title = params.get("title") || "PDF Viewer";
const list = document.getElementById("pdf-canvas-list");
const titleNode = document.getElementById("viewer-title");
let scale = 1.15;

titleNode.textContent = title;
document.title = `${title} | PDF Viewer`;

async function renderPdf() {
  if (!file || !pdfjsLib) {
    list.innerHTML = "<p>PDF not found.</p>";
    return;
  }

  list.innerHTML = "";
  const pdf = await pdfjsLib.getDocument(file).promise;

  for (let i = 1; i <= pdf.numPages; i += 1) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale });
    const wrapper = document.createElement("section");
    wrapper.className = "pdf-page";
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    wrapper.appendChild(canvas);
    list.appendChild(wrapper);
    await page.render({ canvasContext: context, viewport }).promise;
  }
}

document.getElementById("zoom-in").addEventListener("click", async () => {
  scale += 0.1;
  await renderPdf();
});

document.getElementById("zoom-out").addEventListener("click", async () => {
  scale = Math.max(0.6, scale - 0.1);
  await renderPdf();
});

renderPdf();

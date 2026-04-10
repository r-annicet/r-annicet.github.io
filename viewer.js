const params = new URLSearchParams(window.location.search);
const file = params.get("file");
const title = params.get("title") || "PDF";

document.title = `${title} | PDF`;
document.getElementById("viewer-title").textContent = title;

const decodedFile = file ? decodeURIComponent(file) : "";
const frame = document.getElementById("pdf-frame");
const direct = document.getElementById("pdf-direct-link");

frame.src = decodedFile;
direct.href = decodedFile;

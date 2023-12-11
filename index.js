const a = document.getElementById("side-bar");
const b = document.querySelector(".content");

b.addEventListener("click", () => {
  a.classList.remove("active");
});

btn.addEventListener("click", () => {
  a.classList.toggle("active");
});

// Priorités en CSS : !important > id > classe > baliseHtml

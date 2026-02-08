const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");
const navOverlay = document.getElementById("navOverlay");

menuBtn.addEventListener("click", () => {
  nav.classList.add("show");
  navOverlay.classList.add("show");
});

navOverlay.addEventListener("click", () => {
  nav.classList.remove("show");
  navOverlay.classList.remove("show");
});

const backToTop = document.getElementById("backToTop");
const container = document.querySelector(".container");

container.addEventListener("scroll", () => {
  if (container.scrollTop > 800) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  container.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

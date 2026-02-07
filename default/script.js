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

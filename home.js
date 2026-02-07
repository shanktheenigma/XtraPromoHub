/* ===== SLIDER ===== */
const slides = document.querySelector(".slides");
const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");
let index = 0;

nextBtn.onclick = () => {
  index = (index + 1) % slides.children.length;
  slides.style.transform = `translateX(-${index * slides.clientWidth}px)`;
};

backBtn.onclick = () => {
  index = (index - 1 + slides.children.length) % slides.children.length;
  slides.style.transform = `translateX(-${index * slides.clientWidth}px)`;
};

/* ===== DISCOUNT CARDS ===== */
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products;

    document.querySelectorAll(".discounts").forEach((section) => {
      const type = section.dataset.category;
      const container = section.querySelector(".disCards");

      let filtered = [];

      if (type === "trending") filtered = products.slice(0, 10);
      if (type === "popular") filtered = products.slice(10, 20);
      if (type === "best")
        filtered = products
          .filter((p) => p.discountPercentage > 15)
          .slice(0, 10);
      if (type === "others") filtered = products.slice(20, 30);

      filtered.forEach((p) => {
        const price = (p.price * (1 - p.discountPercentage / 100)).toFixed(2);

        container.innerHTML += `
          <div class="disCard">
            <div class="disBadge">${Math.round(p.discountPercentage)}% off</div>
            <div class="disImg">
              <img src="${p.thumbnail}">
            </div>
            <div class="disName">${p.title}</div>
            <div class="disDesc">${p.category}</div>
            <div class="disPrices">
              <span class="disOriginal">$${p.price}</span>
              <span class="disPrice">$${price}</span>
            </div>
            <div class="disFooter"><a href="disDetail.html">View in Detail</a></div>
          </div>
        `;
      });
    });
  });

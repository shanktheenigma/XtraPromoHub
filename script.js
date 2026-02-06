const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;
const total = images.length;

document.querySelector(".next").onclick = () => {
  index = (index + 1) % total;
  slides.style.transform = `translateX(-${index * 1150}px)`;
};

document.querySelector(".back").onclick = () => {
  index = (index - 1 + total) % total;
  slides.style.transform = `translateX(-${index * 1150}px)`;
};

const disCards = document.querySelector(".disCards");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.slice(0, 10).forEach((product) => {
      const card = document.createElement("div");
      card.className = "disCard";

      // Calculate discounted price
      const discountPrice = (
        product.price *
        (1 - product.discountPercentage / 100)
      ).toFixed(2);

      card.innerHTML = `
        <span class="disBadge">${Math.round(product.discountPercentage)}% off</span>
        <div class="disImg">
          <img src="${product.thumbnail}" alt="${product.title}">
        </div>
        <div class="disName">${product.title}</div>
        <div class="disDesc">${product.category}</div>
        <div class="disPrices">
          <span class="disOriginal">$${product.price}</span>
          <span class="disPrice">$${discountPrice}</span>
        </div>
        <div class="disFooter"><a href="">View in Detail</a></div>
      `;

      disCards.appendChild(card);
    });
  })
  .catch((err) => console.error(err));

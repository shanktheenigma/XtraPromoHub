async function loadProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const products = data.products;

    const categories = {};

    // Group products by category
    products.forEach((product) => {
      if (!categories[product.category]) {
        categories[product.category] = [];
      }
      categories[product.category].push(product);
    });

    const wrapper = document.getElementById("productsWrapper");

    // Create a section for each category
    for (let category in categories) {
      const section = document.createElement("div");
      section.classList.add("discounts");

      // Add an id for scrolling
      const categoryId = category.toLowerCase().replace(/\s+/g, "-"); // replace spaces with dash
      section.id = categoryId;

      section.innerHTML = `
        <div class="disHead">
          <div class="disTitle">${category.toUpperCase()}</div>
        </div>
      `;

      const cardContainer = document.createElement("div");
      cardContainer.classList.add("disCards");

      categories[category].forEach((product) => {
        const discount = Math.round(product.discountPercentage);
        const originalPrice = product.price;
        const newPrice = (originalPrice * (1 - discount / 100)).toFixed(2);

        const card = document.createElement("div");
        card.classList.add("disCard");

        // Inside the forEach for each product
        const today = new Date();
        const expireDate = new Date(today);
        expireDate.setDate(today.getDate() + 7); // 7 days from today

        // Format as DD/MM/YYYY
        const formattedExpire = `${expireDate.getDate().toString().padStart(2, "0")}/${(
          expireDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}/${expireDate.getFullYear()}`;

        card.innerHTML = `
          <div class="disBadge">${discount}% off</div>
          <div class="divImg">
          <img src="${product.images[0] || product.thumbnail}" alt="${product.title}">
          </div>
          <div class="disName">${product.title}</div>
          <div class="disPrices">
            <span class="disOriginal">$${originalPrice}</span>
            <span class="disPrice">$${newPrice}</span>
          </div>
          <div class="disExpire">Expires: ${formattedExpire}</div>
          <div class="disFooter"><a href="disDetail.html">View in Detail</a></div>
`;

        cardContainer.appendChild(card);
      });

      section.appendChild(cardContainer);
      wrapper.appendChild(section);
    }

    // Scrolling to where the section is
    const categoryButtons = document.querySelectorAll(".categories button");
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.textContent.toLowerCase().replace(/\s+/g, "-");
        const section = document.getElementById(category);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  } catch (err) {
    console.error("Error loading products:", err);
  }
}

loadProducts();

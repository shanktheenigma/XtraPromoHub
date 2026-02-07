const bookmarkWrapper = document.getElementById("bookmarkWrapper");
const emptyBookmark = document.getElementById("emptyBookmark");

const bookmarkedDiscounts = [
  {
    title: "Skincare",
    desc: "Limited time beauty deal",
    category: "Beauty",
    image: "IMG/bodyLotion.png",
  },
  {
    title: "Headphones",
    desc: "Tech accessories discount",
    category: "Tech",
    image: "IMG/Sony wireless headphones 1.jpg",
  },
];

function renderBookmarks() {
  bookmarkWrapper.innerHTML = "";

  if (bookmarkedDiscounts.length === 0) {
    emptyBookmark.style.display = "block";
    return;
  }

  emptyBookmark.style.display = "none";

  bookmarkedDiscounts.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "discountCard";

    card.innerHTML = `
      <img src="${item.image}" alt="">
      <div class="discountInfo">
        <div class="discountTitle">${item.title}</div>
        <div class="discountDesc">${item.desc}</div>
      </div>
      <div class="discountFooter">
        <span class="discountTag">${item.category}</span>
        <i class="fa-solid fa-bookmark removeBookmark" data-index="${index}"></i>
      </div>
    <button><a href="disDetail.html">View in Detail</a></button>
    `;

    bookmarkWrapper.appendChild(card);
  });
}

renderBookmarks();

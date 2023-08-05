let productsContainer = document.querySelector(".products");
const toast = document.querySelector("#t-msg");
//get the url for json while and print the data out
async function fetchUrl(url) {
  let data = await fetch(url);
  let response = await data.json();
  document.cookie = "cookieName=cookieName; SameSite=None;Secure;";
  displayItem(response);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("reveal");
  setTimeout(function () {
    toast.textContent = "";
    toast.classList.remove("reveal");
  }, 3000);
}

//add event listener to the carts icon in the shop html website.
function addCartAmountEventListeners() {
  const cartAmounts = document.querySelectorAll(".cart-amount");
  let cartNumEl = document.querySelector(".cart-num");
  let startBasketNum = localStorage.getItem("data") || 0;

  cartNumEl.textContent = startBasketNum;

  //add event click on each cart item and when pressed item count goes up
  cartAmounts.forEach((cart) => {
    cart.addEventListener("click", () => {
      startBasketNum++;
      showToast("Added Item To cart");
      // Update the cart count element with the updated value
      cartNumEl.textContent = startBasketNum;
      localStorage.setItem("data", startBasketNum);
    });
  });
}

//get the idem container and then add the products into it until all the product are within the page
function displayItem(itemData) {
  let productElements = itemData
    .filter((item) => {
      return (
        item.category === "women's clothing" ||
        item.category === "men's clothing"
      );
    })
    .map(createItem);

  productElements.forEach((productElement) => {
    productsContainer.appendChild(productElement);
  });

  addCartAmountEventListeners();
}

//make an single product within the shop html page
function createItem(itemData) {
  //the value raiting is a string of decimal number. We use phaseInt to turn string into intergers it will round the number to closet decimal
  const rating = parseInt(itemData.rating.rate);
  //repeat function will repeat the amount of start the rating equal for example rating = 3 mean 3 stars are produced
  const stars = `<i class="fa-solid fa-star star"></i>`.repeat(rating);

  // create and return the product element
  let productElement = document.createElement("div");
  productElement.id = itemData.id;
  productElement.classList.add("product");
  //image of clothes from api
  let itemImg = document.createElement("img");
  itemImg.src = itemData.image;
  itemImg.alt = itemData.title;
  productElement.appendChild(itemImg);
  //item container
  let itemDesc = document.createElement("div");
  itemDesc.classList.add("item-desc");
  productElement.appendChild(itemDesc);

  //product title
  let itemTitle = document.createElement("h5");
  itemTitle.textContent = itemData.title;
  itemDesc.appendChild(itemTitle);
  //porduct raiting
  let ratingDiv = document.createElement("div");
  ratingDiv.classList.add("rating");
  ratingDiv.innerHTML = stars;
  itemDesc.appendChild(ratingDiv);

  let priceCartDiv = document.createElement("div");
  priceCartDiv.classList.add("price-cart");
  itemDesc.appendChild(priceCartDiv);

  let price = document.createElement("h3");
  price.textContent = "£" + itemData.price.toFixed(2);
  priceCartDiv.appendChild(price);

  let cartAmountSpan = document.createElement("span");
  cartAmountSpan.classList.add("cart-amount");
  productElement.appendChild(cartAmountSpan);

  let cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid", "fa-cart-plus", "cart");
  cartAmountSpan.appendChild(cartIcon);

  return productElement;
}

fetchUrl("https://fakestoreapi.com/products");

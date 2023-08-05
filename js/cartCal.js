//get the shoping cart icon
const carts = document.querySelectorAll(".cart-amount");
const toast1 = document.querySelector("#t-msg");
//get the shopping cart Number
const cartNum = document.querySelector(".cart-num");

//number
let startBasketNum = localStorage.getItem("data");
//Message function
function showToast(message) {
  toast1.textContent = message;
  toast1.classList.add("reveal");
  setTimeout(function () {
    toast1.textContent = "";
    toast1.classList.remove("reveal");
  }, 3000);
}

//if cart element exist
if (carts) {
  carts.forEach((cart) => {
    cart.addEventListener("click", () => {
      startBasketNum++;
      showToast("Added Item To cart");
      cartNum.textContent = startBasketNum;
      localStorage.setItem("data", startBasketNum);
    });
  });
}

cartNum.textContent = localStorage.getItem("data");

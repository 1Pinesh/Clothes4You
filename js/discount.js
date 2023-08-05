//get pay now button
const payNow = document.getElementById("payNowbtn");
//get  apply button
const apply = document.getElementById("Apply-btn");

//get Toast
const toast = document.querySelector("#toast-box");
//get plus button id

//get input id
let cardName = document.getElementById("cardName");
let cardNum = document.getElementById("cardNum");
let cardExp = document.getElementById("cardExpiry");
let cardCVC = document.getElementById("cvc");
let errormsg = document.getElementById("error-msg");
let list_Total = document.getElementById("list-total");

//type of regrex
const letterRegex = /^[a-zA-Z]+$/;
const dateRegex = /^(0?[1-9]|1[0-2])\/\d{2}$/;
//validate discount input
const discountCode = "12AB34CD";
//get promo input
let promo_code = document.getElementById("discount-code");
//message of discount if valud or not
let msg = document.getElementById("discount-msg");
//generate a random 12 digit number
let receipt_num = Math.floor(100000000000 + Math.random() * 900000000000);

//apply discount to total
apply.addEventListener("click", () => {
  if (promo_code.value === discountCode) {
    msg.textContent = `Discount Applied`;
    let total_value = parseFloat(list_Total.textContent / 10).toFixed(2);
    document.getElementById("Apply-btn").disabled = true;
    list_Total.textContent -= total_value;
  } else {
    msg.textContent = `Invalid discount`;
    setTimeout(() => {
      msg.textContent = ``;
    }, 4000);
  }
});

//add event listner to pay now button and validate all inputs
payNow.addEventListener("click", () => {
  if (cardName.value === "") {
    errormsg.textContent = `Card Name is empty`;
  } else if (!letterRegex.test(cardName.value)) {
    errormsg.textContent = `Card Name is not in correct format`;
  } else if (cardNum.value.length !== 16) {
    errormsg.textContent = `please type in correct 16 number digit format`;
  } else if (cardExp.value === "") {
    errormsg.textContent = `Card Expiry is empty`;
  } else if (!dateRegex.test(cardExp.value)) {
    errormsg.textContent = `Please type in correct expiry date format`;
  } else if (cardCVC.value.length !== 3) {
    errormsg.textContent = `CVC is is to long or to short`;
  } else {
    function showToast(message) {
      toast.classList.add("show");
      let showMsg = document.querySelector(".show");
      if (showMsg) {
        toast.textContent = "";
        let toastMsg = document.createElement("div");
        toastMsg.classList.add("toast-message");
        let img = document.createElement("img");
        img.src = "img/Products/hourglass.png";
        img.alt = "Hour-glass";
        let text = document.createTextNode("Verifying Payment Detail");
        toastMsg.appendChild(img);
        toastMsg.appendChild(text);
        toast.appendChild(toastMsg);

        setTimeout(() => {
          toast.textContent = "";
          let toastMsg = document.createElement("div");
          toastMsg.classList.add("toast-message");
          let img = document.createElement("img");
          img.src = "/img/Products/tick.png";
          img.alt = "tick";
          let text = document.createTextNode(`${message}`);
          let span = document.createElement("span");
          span.textContent = `Transaction Receipt: ${receipt_num}`;
          toastMsg.appendChild(img);
          toastMsg.appendChild(text);
          toastMsg.appendChild(span);
          toast.appendChild(toastMsg);
        }, 4000);

        setTimeout(() => {
          toast.classList.remove("show");
          toast.textContent = "";
          // Empty input fields
          cardName.value = "";
          cardNum.value = "";
          cardExp.value = "";
          cardCVC.value = "";
          errormsg.textContent = "";
        }, 90000);
      }
    }
    showToast("Payment Sucessfull");
  }
});

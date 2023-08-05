//get all plus Id
const plus1 = document.querySelector(".plus1");
const plus2 = document.querySelector(".plus2");
const plus3 = document.querySelector(".plus3");
//get all quantity id
const quan1 = document.querySelector(".numOfItem1");
const quan2 = document.querySelector(".numOfItem2");
const quan3 = document.querySelector(".numOfItem3");
//get all Minus Id
const minus1 = document.querySelector(".minus1");
const minus2 = document.querySelector(".minus2");
const minus3 = document.querySelector(".minus3");
//get total id
let total1 = document.getElementById("total1");
let total2 = document.getElementById("total2");
let total3 = document.getElementById("total3");
//get item price
const price1 = document.getElementById("price1").textContent.substring(1);
const price2 = document.getElementById("price2").textContent.substring(1);
const price3 = document.getElementById("price3").textContent.substring(1);
// get total quantity
let totalQuantity = document.getElementById("total-item-num");
totalQuantity.textContent =
  parseInt(quan1.textContent) +
  parseInt(quan2.textContent) +
  parseInt(quan3.textContent);

// first total list
let total_list = document.getElementById("total-list");
total2.textContent.substring(1) + total3.textContent.substring(1);
// second total list
let list_total = document.getElementById("list-total");
//set the starting total in list
total_list.textContent =
  parseInt(total1.textContent.substring(1)) +
  parseInt(total2.textContent.substring(1)) +
  parseInt(total3.textContent.substring(1));

list_total.textContent = total_list.textContent;

//increase item quantity
function incrementQuan(quantityOfItem, total, plusBtn, price) {
  plusBtn.addEventListener("click", () => {
    quantityOfItem.textContent++;
    total.textContent = `£ ${quantityOfItem.textContent * price} `;
    totalQuantity.textContent =
      parseInt(quan1.textContent) +
      parseInt(quan2.textContent) +
      parseInt(quan3.textContent);
    total_list.textContent =
      parseInt(total1.textContent.substring(1)) +
      parseInt(total2.textContent.substring(1)) +
      parseInt(total3.textContent.substring(1));
    list_total.textContent = total_list.textContent;
  });
}

//Decrement quantity
function decrementQuan(quantityOfItem, total, minusBtn, price) {
  minusBtn.addEventListener("click", () => {
    //stop user from going below zero
    if (quantityOfItem.textContent === "0") {
      quantityOfItem.textContent = 0;
      total.textContent = `£ ${quantityOfItem.textContent * price} `;
      totalQuantity.textContent =
        parseInt(quan1.textContent) +
        parseInt(quan2.textContent) +
        parseInt(quan3.textContent);
      total_list.textContent =
        parseInt(total1.textContent.substring(1)) +
        parseInt(total2.textContent.substring(1)) +
        parseInt(total3.textContent.substring(1));
      list_total.textContent = total_list.textContent;
    } else {
      quantityOfItem.textContent--;
      total.textContent = `£ ${quantityOfItem.textContent * price} `;
      totalQuantity.textContent =
        parseInt(quan1.textContent) +
        parseInt(quan2.textContent) +
        parseInt(quan3.textContent);
      total_list.textContent =
        parseInt(total1.textContent.substring(1)) +
        parseInt(total2.textContent.substring(1)) +
        parseInt(total3.textContent.substring(1));
      list_total.textContent = total_list.textContent;
    }
  });
}
// calling increment function
incrementQuan(quan1, total1, plus1, price1);
incrementQuan(quan2, total2, plus2, price2);
incrementQuan(quan3, total3, plus3, price3);
// calling decrement function
decrementQuan(quan1, total1, minus1, price1);
decrementQuan(quan2, total2, minus2, price2);
decrementQuan(quan3, total3, minus3, price3);

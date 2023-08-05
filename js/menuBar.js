//get the id of the menu bar
const menu_bar = document.getElementById("menuBar");
//get the id of nav bar
const nav_bar = document.getElementById("navbar");
//get the id of cross icon
const close = document.getElementById("close");
//if menu bar detected
if (menu_bar) {
  menu_bar.addEventListener("click", () => {
    //add class id active to nav bar
    nav_bar.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    //remve class id active to nav bar
    nav_bar.classList.remove("active");
  });
}

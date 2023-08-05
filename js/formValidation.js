//get the id of each input
let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");
let emailAddress = document.getElementById("email");
let problem = document.getElementById("problem");
let submitButton = document.getElementById("submitBtn");

//validate onle character are in a string
const letterRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function validateForm(event) {
  if (fName.value === "") {
    alert("First Name must be filled out");
    //prevernt form from submission
    event.preventDefault();
  } else if (!letterRegex.test(fName.value)) {
    alert("first name is not in correct format");
    //prevernt form from submission
    event.preventDefault();
  } else if (lName.value === "") {
    alert("last Name must be filled out");
    //prevernt form from submission
    event.preventDefault();
  } else if (!letterRegex.test(lName.value)) {
    alert("first name is not in correct format");
    //prevernt form from submission
    event.preventDefault();
  } else if (emailAddress.value === "") {
    alert("email must be filled out");
    //prevernt form from submission
    event.preventDefault();
  } else if (!emailRegex.test(emailAddress.value)) {
    alert("Email is not in correct format");
  } else if (problem.value === "") {
    alert("text area is empty please write your problem/query");
    //prevernt form from submission
    event.preventDefault();
  } else {
    return alert("form submitted sucessfully");
  }
}

submitButton.addEventListener("click", validateForm);

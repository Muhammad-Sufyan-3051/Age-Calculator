//Variables
let dateEl = document.querySelector("input");
let calculateBtn = document.querySelector("button");
let resultEl = document.querySelector("p");


//Logic
function calculateAge(){
    let userAge = dateEl.value.split("-");
    let birthYear = Number(userAge[0]);
    console.log(birthYear);

    let today = new Date();
    let currYear = today.getFullYear();
    console.log(currYear);

    let calAge = currYear - birthYear;
    console.log(calAge);

    resultEl.innerHTML = `Your Age is ${calAge} Years Old.`;
}


//Event Listeners
calculateBtn.addEventListener("click", calculateAge);
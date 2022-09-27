console.log("javascript laddat");


const resultBtn = document.querySelector("#resultBtn");
const myResult = document.querySelector(".result");

resultBtn.addEventListener("click",
function (){
let myValue = "goodbye world";
myResult.innerHTML = myValue;
}
, false);

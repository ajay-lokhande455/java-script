const button = document.getElementById("btn");
const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");


function calculateSum (){
    alert(+firstInput.value + +secondInput.value);
}

button.addEventListener("click", calculateSum);
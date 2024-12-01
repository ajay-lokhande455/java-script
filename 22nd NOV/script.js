


// // const li = document.getElementsByTagName("li");

// // const new_div = document.createElement("div");
// // new_div.setAttribute("class", "my-div");
// // new_div.innerHTML = "Hello";
// // new_div.style.position = "absolute";



// // new_div.setAttribute("class", "my-div");
// // new_div.innerHTML = "Hello";
// // for (let i = 0; i < li.length; i++) {
// //     li[i].onmouseenter = function () {
// //         li[i].appendChild(new_div);
// //         li[i].style.position = "relative";
// //         new_div.style.position = "absolute";
// //     }

// // }
// const ul = document.getElementsByTagName('ul'); // Assuming there's a <ul> element in your HTML

// const liText = function (firstLi, secondLi, thirdLi) {
//     ul.innerHTML = `
//         <li><a href="#">${firstLi}</a></li>
//         <li><a href="#">${secondLi}</a></li>
//         <li><a href="#">${thirdLi}</a></li>
//     `;
// }

// const button = document.getElementById("my-btn");

// button.addEventListener("click", function () {
//     liText("Item 1", "Item 2", "Item 3");
//     console.log(ul.innerHTML);
// });


// let today = new Date();

// let day = today.getDay();
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();

// const dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "Saturaday"];

// if (hour > 12) {
//     console.log(`${hour} : ${minute}m : ${second}s PM`);
//     console.log('Today is ' + dayOfWeek[day]);
// } else {
//     console.log(`${hour}: ${minute}m : ${second}s AM`);
//     console.log('Today is ' + dayOfWeek[day]);
// }

// to print the current window 
// const print = function() {
//     window.print();
// } 

// const button = document.getElementById("my-btn");

// button.addEventListener("click", print);
// button.innerHTML = "Print";  

// find the area of trangle angle is 5,6,7;

// function findArea(angle1, angle2, angle3){
//     const s = (angle1 + angle2 + angle3) / 2;
//     return Math.sqrt(s * (s - angle1) * (s - angle2) * (s - angle3));
// }

// console.log(findArea(5,6,7));


 // Define a function to check if a given year is a leap year
//  function leapyear(year) {
//     // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
//     console.log (year % 100 === 0 ? (year % 400 === 0) : (year % 4 === 0));
// }

// leapyear(2024)

// const firstNumber = document.getElementById("firstNumber");

// const secondNumber = document.getElementById("secondNumber");

// // const result = document.getElementById("result");

// const addButton = document.getElementById("add");
// const multiplication = document.getElementById("multi");

// addButton.onclick = function (firstNumbers, secondNumbers) {
//     let addtion = parseInt(firstNumber.value) +  parseInt(secondNumber.value);
//     result.innerHTML = "Result: " + addtion;
// }

// multiplication.onclick = function (firstNumber, secondNumber) {
//     let multiplicationResult = parseInt(firstNumber.value) * parseInt(secondNumber.value);
//     result.innerHTML = "Result: " + multiplicationResult;

// }


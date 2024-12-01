//to access the element using id
const heading = document.getElementById("my-heading");
console.log(heading);

////to access the element using class

const paras = document.getElementsByClassName("my-para");
console.log(paras);


//to access the element using name

const LiElements = document.getElementsByTagName("li");
console.log(LiElements);

//to access the element using queryselector

const heading2 = document.querySelector("#my-heading");
console.log(heading2);

//to access the para using queryselector

const paras1 = document.querySelector(".my-para");
console.log(paras1);

const paras2 = document.querySelectorAll(".my-para");
console.log(paras2);

//inner HTML use
console.log(heading.innerHTML);

heading.innerHTML = "This is My Javascript Heading";
console.log(heading.innerHTML)

// innerHTML
// innerText
// textcontent

const mySpan = document.getElementById("outer-span");
console.log(mySpan.innerHTML);
console.log(mySpan.innerText);
console.log(mySpan.textContent);


//creating new elemnt to add 

//parent ul
const unorderedList = document.getElementById("my-ul");

//creating li element
const lisItem = document.createElement("li");

//add some text
lisItem.innerText = "Boxing";


unorderedList.appendChild(lisItem);
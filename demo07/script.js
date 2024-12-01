//add a paragraph and make color red..

const div = document.getElementById("container");
const para = document.createElement("p");
para.innerHTML = "Hey I'm red";
div.appendChild(para)
para.style.color = "red";

//add <h3> element and make color blue..

const heading3 = document.createElement("h3");
heading3.innerHTML = "I'm a blue h3";
div.appendChild(heading3);
heading3.style.color = "blue";

//set attribues..
const image = document.getElementById("my-img");
image.setAttribute("src", "123.jpg");

//get attributes
image.getAttribute("src")

//Remove attrinutes.. 
image.removeAttribute("src");
// Object...........>>>

// const person = {
//     first_name : "ajay",
//     last_name : "lokhande",
//     age : 21,
//     city : "pune",
//     greet : function(){
//         alert("hello, how are you?");
//     }
// }

// console.log(person.first_name);
// console.log(person.last_name);
// console.log(person.age);
// console.log(person.city);

// person.greet();

// person.age = 22;

// console.log(person.age);

// DOM ---> Docunment object model, using DOM change html and css code using javascript...


// to select element in html we use document Object

const heading = document.getElementById("my-h1");
console.log(heading.innerHTML);

//select element using by id selector
const heading2 = document.getElementById("my-h2");
console.log(heading2.innerHTML);

//select element using by  class selector
const headings = document.getElementsByClassName("headingclass");
console.log(headings);

//select id using query selector
const heading3 = document.querySelector("#my-h1");
console.log(heading3.innerHTML);

//select class  using query selector
const heading4 = document.querySelector(".headingclass");
console.log(heading4.innerHTML);

// dom --> we'll perform all DOM operation using "document object"

// button on click to change heading
const selectedh1 = document.getElementById("my-h1");
function change(){
    
    selectedh1.innerHTML = "changed heading js";
}

// change the text and their color button click
function goodMorning(){
    const para = document.getElementById("my-para");
    para.innerHTML= "Good morning";
    const randomValue1 = Math.floor(Math.random() * 255);
    const randomValue2 = Math.floor(Math.random() * 255);
    const randomValue3 = Math.floor(Math.random() * 255);
    para.style.color = `rgb(${randomValue1} ${randomValue2} ${randomValue3})`;
    para.style.fontSize = "30px"
}


function hideShow (){
    selectedh1.style.display = "none"
}


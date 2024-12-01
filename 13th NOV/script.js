console.log(3 + +"3");
console.log("3" + -3);

//ternamry operator
let userAge = 15;
const msg = userAge > 18 ? "allow" : "Not allowed"
console.log(msg);

//condtional operator

if (userAge >= 18) {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

//truthy value
if ("salman") {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

//falsy value
if ("") {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

//zero value it aslo falsy value
if (0) {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

// object value is truthy value
if ({}) {
    console.log("you can vote");
} else {
    console.log("object is falsy value");
}

//undefined value
if (undefined) {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

//null value
if (null) {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

//NaN Values
if (NaN) {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

//false value
if (false) {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

//backtik empty is falsy
if (``) {
    console.log("you can vote");
} else {
    console.log("you can't vote");
}

let user_Age = 18;

if (user_Age > 18) {
    console.log("You are over 18, can vote");
} else if (user_Age === 18) {
    console.log("congrates you can vote");
}
else {
    console.log("You can't vote");
}



// functions : it is block of code to perform certain task

// function decalaration
// function greet() {
//     console.log("Good afternoon")
// }
// greet();


//take two number as input and perform sum
function sum(num1, num2) {
    return num1 + num2
}

let addition= sum(2, 4);
console.log(addition);


function greet(name){
    console.log("hello how are you " + name);
}
greet("ajay");




// var is functions scope datatype
// let and const is block scope datatype


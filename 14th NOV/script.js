// function greet(){
//     console.log("Good Morning..");
// }

// function sayGoodBy(){
//     console.log("Good Bye..!");

// }

// function sayHello(){
//     alert("hello how are you...!!!!")

// }


// promt function :------

// function askName(){
//     const user_name = prompt("Please Enter Your Name ..");
//     console.log(`Your name is ${user_name}`);
// }

// function askAge(){
//     let isAbove = confirm("Are you above 18 !!");
//     if(isAbove){
//         alert("you are eligible for vote");
//     }else{
//         alert("you are not eligible for vote");
//     }
// }

// function addThreeAndAlert() {
//     let number = prompt("Enter a number:");
//     // number = parseInt(number); // Convert the input to a number
//     let result = parseInt(number) + 3;
//     alert("The result is: " + result);
// }

// function addTwoAlert() {
//     let number1 = prompt("Enter a number one:");
//     let number2 = prompt("Enter a number two:");
//     let result = parseInt(number1) + parseInt(number2);
//     alert("The result is: " + result);
// }

// function getUserNameAndConvertToUpper() {
//     let userName = prompt("Enter your name:");
//     let upperCaseName = userName.toUpperCase(); // Convert to uppercase
//     alert("Your name in uppercase is: " + upperCaseName);
// }

// to genrate random number to use a Math.Random()
// console.log(Math.floor(Math.random() * 10));

// function getRandomName() {
//     let names = ["Ajay", "Arjun", "Rohan", "Aarav", "Vihaan", "Dev", "Ishaan", "Kartik", "Rahul", "Ayaan"];
//     let randomIndex = Math.floor(Math.random() * names.length); 
//     alert("Randomly selected name: " + names[randomIndex]);
// }

// getRandomName();

//Write a function that takes the base and height of a triangle and return its area.
function triangleArea(base,height){
    return 1/2 * base * height;
}

const area = triangleArea(23,44);
console.log(`${area} is area of triangle.`);



//Write a function that takes three numbers and returns the largest of them.

function isLargestOfThree(a,b,c){
    if(a>b){
        if(a>c){
            return a;
        }else{
            return c;
        }
    }
    if(b>c){
        return b;
    }else{
        return c;
    }
}

console.log(isLargestOfThree(8,4,6));


// factorial of number

function factorialOfNumber(number){
    let fact = 1;
    for(let i= 1; i<=number; i++){
        fact *= i;
    }
    return fact;
     
}

console.log(factorialOfNumber(6));
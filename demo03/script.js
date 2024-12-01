
function getSum(num1,num2){
    return num1 + num2
}

const sum = getSum(20,30);
console.log(sum);



//Write a function that takes an integer minutes and converts it to seconds.

function minutesToSeconds(minutes) {
    return minutes * 60;
}

// Example usage:
let minutes = 5;
let seconds = minutesToSeconds(minutes);
console.log(`${minutes} minutes is ${seconds} seconds.`);

//Create a function that takes a number as an argument, increments the number by +1 and returns the result

function incrementsNumber(number){
    return ++number;
}

const number = incrementsNumber(10);
console.log(number);

//Write a function that takes the base and height of a triangle and return its area.

function triangleArea(base,height){
    return 1/2 * base * height;
}

const area = triangleArea(23,44);
console.log(`${area} is area of triangle.`);

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function isSumLessThan100(num1, num2) {
    return (num1 + num2) < 100;
}


console.log(isSumLessThan100(40, 50)); //false
console.log(isSumLessThan100(60, 50)); //true

//Write a function that checks whether a number is even or odd.

function isEvenOrOdd(num){
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEvenOrOdd(10));

//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function sumUpTo(number){
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumUpTo(4));


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

console.log(isLargestOfThree(2,4,6))

//Write a function to check if a given number is a palindrome (a word that reads the same backward).

//Write a function that returns the factorial of a given number.

function factorialOfNumber(number){
    let fact = 1;
    for(let i= 1; i<=number; i++){
        fact = fact * i;
    }
    return fact;
     
}

console.log(factorialOfNumber(6));

//Write a function that counts the number of vowels in a given string.

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  }
  
  // Example usage:
  let string = "Hello, World!";
  console.log(`The number of vowels in "${string}" is ${countVowels(string)}`);

  //Write a function to generate the Fibonacci sequence up to n terms.

  function FibonacciSeries(number){
    let num1 = 0 ;
    let num2 = 1 ;
    for(let i = 0 ; i < number ; i++){

        console.log(`${num1} `);
        let num3 = num2 + num1;
        num1 = num2;
        num2 = num3;
    }
  }
  console.log(FibonacciSeries(10));
  
//Write a function that checks if a number is prime.

  function isPrime(num) {
    // A prime number must be greater than 1
    if (num <= 1) {
        return false;
    }

    // Check divisibility from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(isPrime(29));  // true

//Write a function to calculate the sum of digits of a given number.

function sumOfDigits(num) {
    let sum = 0;
    // Convert the number to a string to iterate over each digit
    let numStr = Math.abs(num).toString();  // Use Math.abs to handle negative numbers

    for (let digit of numStr) {
        sum += parseInt(digit);  // Convert each character back to an integer and add to sum
    }

    return sum;
}

// Example usage:
console.log(sumOfDigits(12345));  // Output: 15

// Write a function that capitalizes the first letter of every word in a given sentence.

function capitalizeWords(sentence) {
    // Split the sentence into words, capitalize each, and join them back
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Example usage:
const sentence = "hello world! this is a test sentence.";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);


//Write a function to return number of digits in given numbe

function countDigits(number) {
    // Convert the number to a string and get its length
    return Math.abs(number).toString().length;
}

// Example usage:
const num = 12345;
console.log(`The number of digits in ${num} is:`, countDigits(num));


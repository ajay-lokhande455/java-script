
// const person = {
//     name: 'John Doe',
//     age: 30,
//     city: 'New York'
// }

// const {name, age, city} = person;

// console.log(name);
// console.log(age);
// console.log(city);


// const array = ['John Doe', 30, 'New York', 'Developer'];

// // const {0: name, 1: age, 2: city, 3: profession} = array;
// const [name, age, city, profession] = array;

// console.log(name);  
// console.log(age);
// console.log(city);
// console.log(profession);

// destructuring objects and arrays in function arguments



// import  { person, greet } from './main.js';

// console.log(person);

// const {name, age, city, profession} = person;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(profession);

// greet('John Doe');

// import Developer from './main.js';

// const {name, age, city, profession} = Developer;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(profession);


// import { isPrimeCheck } from './main.js';

// console.log(isPrimeCheck(11)); 


//filter out positive integers from an array
// const array = [1, -2, -5, 3, 5, -8];


// const positiveNumbers = array.filter((number) => number > 0);

// console.log(positiveNumbers); 


// using for loop
// const array = [1, -2, -5, 3, 5, -8];
// const newArray = [];
// for (let i = 0; i < array.length; i++)
//     if (array[i] >= 0) {
//         newArray.push(array[i]);
//     }
// console.log(newArray);






//capitalize the first letter of each name in an array
// const names = ['ajay', 'kundan', 'arti', 'jayraj', 'digvijay'];

// const capitalizedNames = names.map(name => {
//   const firstLetter = name.charAt(0).toUpperCase();
//   const restOfName = name.slice(1);
//   return firstLetter + restOfName;
// });
// console.log(capitalizedNames); 


// import { convertToUpper } from './main.js';
// const names = ['ajay', 'kundan', 'arti', 'jayraj', 'digvijay'];
// console.log(convertToUpper(names));



// filter even numbers from an array
// import { evenNumber } from './main.js';
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(evenNumber(numbers));



// add star from a string with 
// import { nameWithStar } from './main.js';
// const names = ['ajay', 'kundan', 'arti', 'jayraj', 'digvijay'];

// console.log(nameWithStar(names)); 


async function fetchApi() {
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();
    const todos = data.todos
    const completedTasks = todos.filter((task) => task.completed === true);
    console.log(completedTasks);
}

fetchApi();


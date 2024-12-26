
export const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    profession : 'Developer'
}

export function greet() {
    console.log(`Hello, my name is ${person.name}! I am a ${person.profession} and I live in ${person.city}.`);
}


const Developer = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    profession : 'Developer'
}

export default Developer;

// let isPrime = fales;
// export function isPrimeCheck(num) {
//     for (let i = 2; i <= num; i++) {
//         if (num % i === 0) {
//             isPrime = true;
//         }
//     }
//     return isPrime;
// }


export function convertToUpper(arr){
    return arr.map((str) => str.toUpperCase());
}


export function evenNumber(arr){
    return arr.filter((num) => num % 2 === 0);
}

export function nameWithStar(arr){
    return arr.map((str) => `*${str}*`);
}


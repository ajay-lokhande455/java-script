// function copyToClipboard(text) {
//     // Check if the clipboard API is supported
//     if (navigator.clipboard) {
//       navigator.clipboard.writeText(text)
//         .then(() => {
//           console.log(`"${text}" copied to clipboard successfully!`);
//         })
//         .catch((err) => {
//           console.error('Failed to copy to clipboard: ', err);
//         });
//     } else {
//       // Fallback for older browsers
//       const textarea = document.createElement('textarea');
//       textarea.value = text;
//       document.body.appendChild(textarea);
//       textarea.select();
//       try {
//         document.execCommand('copy');
//         console.log(`"${text}" copied to clipboard using fallback method!`);
//       } catch (err) {
//         console.error('Fallback method failed: ', err);
//       }
//       document.body.removeChild(textarea);
//     }
//   }

//   // Example usage
//   copyToClipboard('Hello, Ajay! This text has been copied to your clipboard.');


//#Source https://bit.ly/2neWfJ2 
// Define a function called `random_hex_color_code` that generates a random hexadecimal color code.
// const random_hex_color_code = () => {
//   // Generate a random number and convert it to hexadecimal string representation.
//   let n = (Math.random() * 0xfffff * 1000000).toString(16);
//   // Return the hexadecimal color code with '#' appended.
//    const color = '#' + n.slice(0, 6);
//    console.log(color);
//    const box = document.createElement('div');
//    box.style.width = '200px';
//    box.style.height = '200px';
//    box.style.backgroundColor = color;

//    document.body.appendChild(box);

// };



// // Test the function
// console.log(random_hex_color_code()); // Output: Random hexadecimal color code

// const number = [10, -2, -3, -4, -5, -6, 20, 23, 55];

// Filter the negative numbers

// const filterNumber = number.filter(function(number){
//   return number > 0;
// });

// console.log(filterNumber);

// const numbers = [10, -2, -3, -4, -5, -6, 20, 23, 55];

// for(let number of numbers){
//   console.log(number);
// }


// for(let number of numbers){
//   if(number > 0){
//     console.log(number);
//   }
// }


// for(let number in numbers){
//   console.log(numbers[3]);
// }

// const persons = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// }

// for(let key in persons){
//   console.log(key + ' ' + persons[key]);
// }

const number  = [1,3,4,5,6,20,23,]

const double = number.map(num = num * 2);

console.log(double);
// console.log("start");

// setTimeout(function timeout(){
//     console.log("timeout");
//     }, 5000);

// console.log("end");



//promises in javascript 

// const promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         reject("Promise 1 rejected with error");
//         }, 2000);
// });

// promise1.then((data) => console.log("data: " + data))
// .catch((err) => console.log("error: " + err))
// .finally((err) => console.log("finally: ")
// );



//using resolve------------------------

// function sendRequest(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("sendRequest");
//             }, 3000);
//         });
// }

// sendRequest().then((data) => console.log("data: " + data))
// .catch ((error) => console.log(error));



// using reject ------------------------
// function sendRequest(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("rejected with error");
//             }, 3000);
//         });
// }

// sendRequest().then((data) => console.log("data: " + data))
// .catch ((error) => console.log(error));


// function sendRequest(){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("sendRequest");
//                 }, 2000);
//             });
//     }


//     // async and await 
//     async function handleClick() {
//         const data = await sendRequest();
//         console.log("data: " + data);
//     }

//     handleClick();


// api fetching using fetch() ------------------------
// async function fetchData(){
//     const data = await fetch("https://official-joke-api.appspot.com/random_joke");
//     const respons = await data.json();
//     console.log(respons);
// };

//  fetchData();



//  fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// fetching product records using fetch() 
async function fetchProducts() {
    try {
        const data = await fetch("https://dummyjson.com/products/5");
        const products = await data.json();
        console.log(products);
        

        const myh1 = document.querySelector('h1');
        myh1.textContent = products.title;
    }
    catch (error) {
        console.log(error);
    }
};


// arithmatic operator
let num1 = 10;
let num2 = 3;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(4 ** 2);
console.log(4 ** 3);

//comparision operator

// greater than
let num3 = 12;
let num4 = 15;
let num5 = 12;

// greater than
console.log(num3>num4); // false

//less than
console.log(num3<num4); //true

//greater than or equal to
console.log(num3>=num4);//false
console.log(num3>=num5);//true
console.log(num4>=num5);//true

//less than or equal to
console.log(num3<=num4);// true
console.log(num3<=num5);// true
console.log(num4<=num5);// false


//Equality operators 
// -> to check if given operator are equal or not

//  equal to equal to (==)
console.log(10 == 10);// true
console.log(5 == 10); // false

console.log(10 != 11); // true
console.log(10 != 10); // false

console.log("pune" == "nashik");// false
console.log("pune" == "pune"); //false
console.log("pune" == "Pune"); //false

console.log("one" == 1); //false
console.log("1" == 1);

//tripe equal to or strick equality operator (===)
console.log("1" === 1);

// strick  not equality operator (!==)
console.log("1" !== 1);
console.log("2" !== 1);
console.log(11 != 10);


//logical operators

//logical AND

console.log(true && true); // true
console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false

//logical OR

console.log(true || true); // true
console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
const balance = new Number(100)

console.log(balance.toFixed(4));

const otherNumber = new Number(23.9876)

console.log(otherNumber.toPrecision(4));

const bigNum = 1000000000000

console.log(bigNum.toLocaleString('en-IN'));

console.log((typeof Number));
console.log(typeof String);



// ++++++++++++++++++++++Maths++++++++++++++++++++++++++++

// Math is an object with multiple properties

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1)) + min);





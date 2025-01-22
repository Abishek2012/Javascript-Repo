// let a =10
// let a = 100

// This will throw a syntax error as duplication of let is not allowed and let and const lies in temporal dead zones which is the time from which the let & const are hoisted till the time it is initialized.

let a;

a = 24

console.log(a);

var b;

b = 70

console.log(b);


const c = 20;

a = 100
console.log(a);



//  Primitive Datatype

//  Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn  = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id !== anotherId);






// Reference Type (Non Primitive)

// Array, Objects, Functions

const heroes = ["superman", "Batman", "Spiderman", "Hulk"]  // ----->Array Decalaration
let myObj = {                           //   Object declaration
    name : "Abishek",                   //
    age : "22"                          //
} 


const myFunction = function(){
          console.log("Hello World");
          
}



console.log(typeof heroes);
console.log(typeof id);


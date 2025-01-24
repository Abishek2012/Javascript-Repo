const name = "Abishek"
const age = 24

// console.log(name + " is " +  age +" years old ");


// console.log(`${name} is ${age} years old`);


const gameName = new String("The Witcher")

console.log(gameName[2,4]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("m"));
console.log(gameName.startsWith("m"));

const newString = gameName.substring(0,3)
console.log(newString);


const anotherString = gameName.slice(-8,1)
console.log(anotherString);


const newStringName = "  Abishek   "

console.log(newStringName);
console.log(newStringName.trim());

const url = "https://abishek.com/Abishek"
console.log(url.replace("https", "http"))


















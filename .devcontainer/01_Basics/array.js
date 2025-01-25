// // array

// let myArr = [1, 2, 4 ,6 , 8]

// let arr1 = myArr

// // arr1 = [2,4,5,6]

// console.log(arr1);



const arr2 = new Array(1, 2, 3, 4, 5)



console.log(arr2.length);

// Array Methods

// arr2.push(6)
// console.log(arr2);

// arr2.pop()
// console.log(arr2);


// console.log(arr2.unshift("hello"))
// console.log(arr2);

// const newArr = arr2.join()



// slice and splice

// console.log("A", arr2);
// const myn1 = arr2.slice(1, 4)

// console.log(myn1);
// console.log("B", arr2);

// const myn2 = arr2.splice(1,4)
// console.log(myn2);
// console.log("C", arr2);






//  Array Part - 2


const marvel_Heroes = ["thor", "Ironman", "Spiderman"]
const dc_Heroes = ["Superman", "Flash", "Batman"]

const superheroes = marvel_Heroes.concat(dc_Heroes)

console.log(superheroes);


const all_heroes = [...marvel_Heroes, ...dc_Heroes]
console.log(all_heroes);


const anotherArray = [1, 2, 3, 4,[2, 3, 4], 7, [6,7, [4,5]]]
const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Abishek"))
console.log(Array.from("Abishek"));
console.log(Array.from({name : "Abishek"}));

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = Array.of(score1, score2, score3, score1, score3)

console.log(Array.of(score1, score2, score3, score1, score3));
console.log(score4);












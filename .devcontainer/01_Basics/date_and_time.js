// //  dates

// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 6, 25)
// let CreatedDate = new Date(2023, 6, 25, 17, 30)
// console.log(CreatedDate.toLocaleString());

// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("01-03-2024")
console.log(myCreatedDate.toLocaleString( "default", {
      weekday : "narrow"  
}));

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newTime = new Date()

console.log(newTime.getMonth() + 1);

console.log(Math.round(Date.now()/1000));









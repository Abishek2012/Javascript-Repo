// // // // for of loop



// // // const arr = [1,2,3,4,5]
// // // for (const i of arr) {

// // //     console.log(i);
    
    
// // // }


// // // const greetings = "Hello World"
// // // for (const i of greetings) {
// // //     console.log(i);
    
    
// // // }


// // // // Maps

// // // const map = new Map()
// // // map.set('IN' , "India")
// // // map.set('EN' , "England")
// // // map.set('AU' , "Australia")

// // // console.log(map);

// // // for (const [key, value] of map) {
// // //     console.log(key, ":-" , value);
    
    
// // // }

// // // const myObject = {
// // //     game1 : "NFS",
// // //     game2 : "spiderman"
// // // }

// // // // for (const [key, value] of myObject) {
    
// // // // }

// // const myObject = {
// //     js : "javascript",
// //     cpp : "C++",
// //     rb : "ruby"
// // }

// // for (const key in myObject) {
// //     console.log(key);
// //     console.log(myObject[key]);
    
    
// // }


// // const programme = ["js", "cpp", "c++"]

// // for (const key in programme) {
// //     console.log(programme[key]);
    
// // }


// // for each

// const coding = ["java", "js", "python"]


// coding.forEach( function (item , index , arr){
//    console.log(item , index , arr);
   
// })






const myCoding = [
    {
        languagename : "js"
    },
    {
        languagename : "python"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagename);
    
})
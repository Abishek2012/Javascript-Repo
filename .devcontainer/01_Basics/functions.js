// // // function add(a,b){
// // //     return a + b
// // // }

// // // console.log(add(2,4))

// // function add(a,b){

// //      let result = a + b
// //      console.log(result);
     
// // }

// // add(6,8)




// // function loginUser(username){
// //    return `${username} just logged in`
// // }

// // console.log(loginUser("Abishek"));





// //  objects and Array in functions

// // function calculateCartPrice (...num1) {
// //       return num1
// // }


// // console.log(calculateCartPrice(222, 345, 567, 899));


// // const user = {
// //     username : "Abishek",
// //     price : 199
// // }

// // function handleObject(anyObject){
// //       console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
      
// // }

// // handleObject(user)

// // handleObject({
// //     username : "Absdk",
// //     price : 299
// // })


// const myArray = [22, 300, 400]

// function returnSecondValue(getArray){
//     return getArray[2]
// }

// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([200,300,400,500,600]));





// // Scope Level

// if(true){
//     const userName = "Ashish"
//     if(userName === "Ashish") {
//       const webSite = "youtube"
//       console.log(`${userName} and ${webSite}`);
      
//     }
//     // console.log(webSite); inaccessible    
// }






function addone(value){
    return value + 1
}

console.log(addone(6));


const addTwo = function(num){
    return num + 4
}

addTwo(7)

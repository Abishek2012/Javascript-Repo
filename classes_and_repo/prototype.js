// // // let myName = " Abishek "
// // // console.log(myName.length);
// // // console.log(myName.trim().length);




// // // // console.log(myName.trimStart());


// // let myHero = ["thor", "spiderman"]

// // let heroPower = {
// //     thor : "hammer",
// //     spiderman : "web",

// //     getSpiderPower:function(){
// //         console.log(`the power of spidy is ${this.spiderman}`);
        
// //     }
// // }



// // Object.prototype.Abishek = function(){
// //     console.log(`Abishek is omnipresent`);
    
// // }

// // Abishek()
// // heroPower.Abishek()



// // Inheritence

// const superUser ={
//     userID : "pappu"
// }


// const user = {
//     username : "Abishek",
//     mail : "abishek@gmail.com"
// }
// const classes = {
//     class : "jabvascript"
// }
// const teacher = {
//     gender : "female",
//     age : "25",
//     __proto__ : classes
// }

// user.__proto__ = superUser

// // modern Syntax

// Object.setPrototypeOf(teacher, superUser)



let UserCode = "Hello World     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    
    console.log(`${this.trim().length}`);
    
}

UserCode.truelength()
"PappuLalPanwadiSingh".truelength()

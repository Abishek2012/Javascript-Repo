// //  Singleton Object

// // Object Literals
// // Object.create   Constructor Method

// const mySym = Symbol("Key1")
// const User = {
//     name : "Abishek",
//     age : 18,
//     [mySym] : "Key1",
//     location : "jaipur",
//     email : "abishek@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday", "Sunday"]
// }


// console.log(User.name);
// console.log(User["name"]);
// console.log(User[mySym]);



// User.name = "Pappu"

// // Object.freeze(User)
// User.name = "Triveni"

// console.log(User);


// User.greeting = function(){
//     console.log("Hi There");
    
// }

// User.greetinTwo = function(){
//     console.log(`Hi there, ${this.name}`);
    
// }

// console.log(User.greeting());
// console.log(User.greetinTwo());

// console.log(User);





// const tinderUser = new Object() Constructor Method for creating Object

const tinderUser = {}

tinderUser.name = "Sammy"
tinderUser.Id = "123abc"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "abishek275@gmail.com",
    fullname : {
        Firstname : "Abishek",
        Lastname : "Shukla",
        Username : {
                middleName : "Kumar"
        }
        
    }

}


console.log(regularUser.fullname.Firstname);



const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign({}, obj1 , obj2)
const obj4 = {...obj1, ...obj2}

// console.log(obj4);


console.log(obj4);

const users = [
    {
        id : 1,
        name : "pappu"
    },
    {
        id : 2,
        name : "lappu"
    }
]

console.log(users[1].id)
console.log(users[0]);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
















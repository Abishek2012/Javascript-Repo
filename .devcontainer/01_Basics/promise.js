// const promiseOne = new Promise()
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task like DB calls, Cryptography, network
    setTimeout(function(){
        console.log("Async Task Is complete");
        resolve()

    }, 6000)
})

promiseOne.then(function(){
    console.log("promise consumed");

})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()

    }, 1000)
}).then(function(){
    console.log("async2 resolved");

})



const promiseTwo = new Promise(function(resolve, reject)
{
     setTimeout(function(){
        resolve({username : "Chai", email : "ab@gmail.com"})
     }, 1000)
})

promiseTwo.then(function(user){
       console.log(user.username);

})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve([1,2,3,4,5])
        }else {
            reject('ERROR')
        }
    }, 2000)
}).then((user) => {
    console.log(user);


}).catch((error) => console.log(error)
).finally(() => (console.log("the promise is either resolved or rejected"))
)



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if(!error) {
            resolve({username:"ABishek", class : "Seventh"})
        } else {
            reject({username : "Pappu" , class : "demoted to sixth"})
        }
    }, 2000)
})

async function consumePromiseFour(){
   try {
    const response = await promiseFour
    console.log(response);
   } catch (error) {
      console.log((error));

   }

}

consumePromiseFour()


async function getAllUser(){
    try {
        const response  = await fetch("https://www.youtube.com")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);

    }

}

getAllUser()









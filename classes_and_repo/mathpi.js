// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// const mynewObject = Object.create(null)


const chai = {
    name : "gibger",
    price : 250,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai, "name", {
    writable  : false,
    enumeable : false
})


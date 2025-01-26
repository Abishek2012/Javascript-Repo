// // map

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// // let newNums = myNums.filter( (num) => num > 5)
// // console.log(newNums);



// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//            newNums.push(num)
//     }
// })

// console.log(newNums);





const books = [
    {title : 'Book One' , genre : 'Non-Fiction' , publish : 1981, edition : 2004},
    {title : 'Book Two' , genre : 'Fiction' , publish : 1982, edition : 2006},
    {title : 'Book Three' , genre : 'History' , publish : 1983, edition : 2005},
    {title : 'Book Four' , genre : 'Fiction' , publish : 1988, edition : 2007},
    {title : 'Book Five' , genre : 'Science' , publish : 1999, edition : 2009},
    {title : 'Book Six' , genre : 'Fiction' , publish : 1980, edition : 2005},
    {title : 'Book Seven' , genre : 'History' , publish : 1979, edition : 2006}
]

let userBooks = books.filter( (bk) => bk.genre === 'History' ) 

userBooks = books.filter( (bk) => bk.edition >= 2003 )

console.log(userBooks);

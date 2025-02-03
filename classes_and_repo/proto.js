// const product = (num) => num * 5;
// console.log(product(4));
// console.log(typeof product);
// console.log(product.prototype);
// product.power = 2
// console.log(product.power);








function createUser(username, score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function() {
    this.score++
    return this
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser("Abishek" , 200)
const tea = new createUser("tea", 250)


chai.printMe()
tea.printMe()
tea.increment()
console.log(tea.score);

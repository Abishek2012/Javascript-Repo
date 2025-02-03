class User {
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username}`);
        
    }

    static createID(){
        return `123`
    }
}

const abishek = new User("Abishek")
console.log(abishek.createID());


//  static keyword does not let you access the object that is instatiated in the same class



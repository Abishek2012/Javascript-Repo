class User {
    constructor(username){
       this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }

    addCourse() {
        console.log(`${this.username}`);
        
    }
}

const chai = new Teacher("Teacher" , "p@gmail.com")

chai.addCourse()
console.log(chai);

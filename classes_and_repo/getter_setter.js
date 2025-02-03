class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value){
       this._email = value.toUpperCase()
       this._email = value
    }
}

const abishek = new User("a@gmail.com" , "1234")
console.log(abishek.email);

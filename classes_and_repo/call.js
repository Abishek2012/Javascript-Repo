function setUserName(username){
    this.username = username
    console.log("called");
    
}

function getUser(username, mail, password){
    setUserName.call(this , username)
    this.mail = mail
    this.password = password
}

const chai = new getUser("Abishek" , "abishek@gmail.com", "pappu@1997")
console.log(chai);

const User={
    _email:"rudraksh@example.com",
    _password:"123",

    get email(){
        return this._email;
    },
    set email(newEmail){
        this._email=newEmail;
    }
}

const user=Object.create(User) 
console.log(user.email);
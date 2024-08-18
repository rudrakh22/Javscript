class User{
    constructor(email, password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email;
    }
    set email(value){
        this._email=value;
    }

}

const user=new User("rudra@example.com","rudra");

console.log(user.email); 




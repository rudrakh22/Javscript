function User(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,"email",{
        get:function(){
            return this._email;
        },
        set:function(value){
            this._email=value;
        }
    }
    )
}

const user1=new User("rudra@example.com","password");

console.log(user1.email)
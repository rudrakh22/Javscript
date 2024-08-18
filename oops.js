const user={
    username:"Dev",
    login:"1",
    signedIn:true,
    getUserDetails:function(){
        console.log(this);
    }
}

// console.log(user.getUserDetails())
// console.log(user.name);
// console.log(this);

function User(username,login,signedIn){
    this.username=username;
    this.login=login;
    this.signedIn=signedIn;

    this.greeting=function(){
        console.log(`Hello ${this.username}`);
    }
}

const user1=new User("rudra",3,true);
const user2=new User("rudraksh",6,false);
console.log("user",user1.constructor);
// console.log("user",user2);


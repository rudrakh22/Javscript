function setUser(user){
    this.user=user;
    console.log("setUser called");
}

function createUser(user,email,password){
    setUser.call(this,user);
    this.email=email;
    this.password=password;
}

const chai=new createUser("rudraksh","rudra@example.com","123");
console.log(chai);

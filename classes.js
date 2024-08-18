// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return (`${this.password}defe`);
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const User1=new User("Rudraksh","rudra@example.com","123");
// console.log(User1.encryptPassword()); 
// console.log(User1.changeUsername());


// *********************************BEHIND THE SCENE *********************************

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
    return (`${this.password}defe`);
}

User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const User1=new User("Rudraksh","rudra@example.com","123");
console.log(User1.encryptPassword()); 
console.log(User1.changeUsername());
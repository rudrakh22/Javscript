// const mySymbol=Symbol("mykey");

// const User={
//     "name":"Rudraksh",
//     age:25,
//     [mySymbol]:"mykey1",
//     email:"rudraksh@gmail.com",
//     password:"Vasudev@123",
//     phone:"9876543210",
// }

// console.log(User["name"]);
// User.greeting=function(){
//     console.log(`Hello ${this.age}`);
// }
// console.log(User.greeting());

// console.log(JSON.stringify(User));


// const numbers=[1,2,3,4,5,6,7,8];
// // for (const num of numbers) {
// //     console.log(num);
// // }

// // const map=new Map();
// // map.set('name','Rudraksh');
// // map.set('age','25');
// // map.set('email','rudraksh@gmail.com');

// // for (const [key,values] of map) {
// //     console.log(key+values);
// // }

// // const obj={
// //     name:'Rudraksh',
// //     age:25,
// //     email:'rudraksh@gmail.com',
// // }

// // not iteratable
// // for (const [key] of obj) {
// //     console.log(key);
// // }

// // for (const key in obj) {
// //     console.log(key,obj[key])
// // }

// const users=[
//     {
//         name:'Rudraksh',
//         age:25,
//         email:'rudraksh@gmail.com',
//     },
//     {
//         name:'Vasudev',
//         age:26,
//         email:'vasudev@gmail.com',
//     },
//     {
//         name:'Sudhir',
//         age:27,
//         email:'sudhir@gmail.com',
//     }
// ];

// users.forEach((user)=>{
//     console.table(`${user.name}  ${user.age} ${user.email}`);
// })


const numbers=[1,2,3,4,5,6,7,8,9,10];
const total=numbers.reduce((acc,curr)=>(acc+curr),100)
console.log(total);
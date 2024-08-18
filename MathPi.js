// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);

const user={
    name:"Rudraksh",
    age:25,
    email:"rudraksh@gmail.com",
}

const descriptor2=Object.getOwnPropertyDescriptor(user,"name");
console.log(descriptor2);
const ans=Object.defineProperty(user,"name",{
    enumerable: false,
})
console.log(ans);


for( let [key,value] of Object.entries(user)){
    console.log(key,value);
}
let heros=["thor","spiderman"];

Array.prototype.rudraksh=function(){
    console.log("THis is array prototype",this)
}

// heros.rudraksh();

let obj={
    name:"Rudraksh",
    age:25,
    email:"rudraksh@gmail.com"
};

Object.prototype.rudraksh=function(){
    console.log("This is object prototype",this)
}

// obj.rudraksh();

// inheritance

const User={
    name:"Rudraksh",
    age:25,
};

const Teacher={
    makeVideos:true,
}

const TeachingSupport={
    isAvailable:true,
}

const TASupport={
    makeAssignment:true,
    fulltime:true,
    __proto__:TeachingSupport,
}

Object.setPrototypeOf(TeachingSupport,Teacher); 

let str="Rudraksh     ";

String.prototype.trueLength=function(){
    console.log(this);
    return this.trim().length;
}

console.log(str.trueLength())
console.log("hitesh".trueLength())




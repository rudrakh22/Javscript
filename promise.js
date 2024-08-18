
// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//             console.log('Promise 1 fulfilled');
//             resolve();
//         }
//         else{
//             reject('Error in Promise 1');
//         }
//     },2000);
// }).then(()=>{
//     console.log('Promise 1 resolved');
// }).catch((error)=>{
//     console.log('Promise 1 rejected',error);
// })


// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//             console.log('Promise 2 fulfilled');
//             resolve();
//         }
//         else{
//             reject('Error in Promise 2');
//         }
//     },1000);
// })

// async function consume(){
//     try{
//         const res=await promise2;
//         console.log('Both promises resolved');
//     }
//     catch(error){
//         console.log('Error occurred',error);
//     }
// }

const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            console.log('Promise 3 fulfilled');
            resolve({userName:"Dev",email:"dev@example.com"});
        }
        else{
            reject('Error in Promise 3');
        }
    },1500);
}).then((user)=>{
    console.log(user);
    return user.userName
})
.then((user)=>{
    console.log(user);
})
.catch((error)=>{
    console.log('Promise 3 rejected'+error);
})


const getData=async()=>{
    try{
        const res=await fetch('https://api.github.com/users/hiteshchoudhary');
        const data=await res.json();
        console.log(data);
    }catch(error){
        console.log('Error occurred',error);
    }
}
getData();
let promise1 = new Promise((res,rej) =>{
    setTimeout(() => {
        return res("Promise 1 resolved");
    }, 3000);
});

//Chaining Promises
let promise2 = promise1.then(function(data){
    console.log(data);
    return new Promise((res,rej) =>{
        setTimeout(() =>{
            return res("Promise 2 resolved");
        },2000);
    })
});

let promise3 = promise2.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            return res("Promise 3 resolved");
        },1000);
    })
});

promise3.then(function(data){
    console.log(data);
});
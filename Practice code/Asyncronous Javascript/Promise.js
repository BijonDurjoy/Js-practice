/*
let coffie = new Promise((res,rej) =>{
    if(false){
        res();
    }
    else{
        rej();
    }
});

coffie.then(function () {
    console.log("Resolved");
}).catch(function () {
    console.log("Rejected");
});
*/

let mathAns = new Promise((res,rej) =>{
    let n = Math.floor(Math.random() * 10);
    if(n<5){
        res(n);
    }
    else{
        rej(n);
    }
})

mathAns.then(function(n){
    console.log(`${n} is less than 5`);
}).catch(function(n){
    console.log(`${n} is greater than 5`);
});
const step1 = new Promise((res,rej) =>{
    setTimeout(() => {
        res('Step 1 completed');
    }, 6000);
});
const step2 = new Promise((res,rej) =>{
    setTimeout(() => {
        res('Step 2 completed');
    }, 2000);
});

/*
step1.then(function(res){
    console.log(res);
});
step2.then(function(res){
    console.log(res);
});
*/

/*
Promise.all([step1,step2]).then(res =>{
    console.log(res);
});
*/
Promise.race([step1,step2]).then(res =>{
    console.log(res);
});
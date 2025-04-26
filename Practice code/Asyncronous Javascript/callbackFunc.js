const takeOrder = (customer, callback) =>{
    console.log(`Taiking order from ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) =>{
    console.log(`Process order for ${customer}`);

    setTimeout(() => {
        console.log(`Cooking Complete`);
        console.log(`Order placed for ${customer}`);
        callback(customer);
    }, 5000);

}

const completeOrder = () =>{
    console.log(`Order completed`);
}

//function call 
takeOrder("customer 1", () =>{
    processOrder("customer 1" ,() =>{
        completeOrder();
    });
});

console.log("test");




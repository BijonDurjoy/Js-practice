processOrder = () =>{
    console.log("Processing order for customer");

    setTimeout(() => {
        console.log("Cooking complete");
    }, 5000);

    console.log("Takeing order from customer");
}

console.log("Taking order from customer");
processOrder();
console.log("Food Delivered to customer");
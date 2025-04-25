function exampleVar() {

    if (true) {
        var test = "Hello from var";
        console.log(test); // Hello from var
    }
    console.log(test); // Hello from var outside og the block scope
}
exampleVar();


function exampleLet() {

    if (true) {
        let test = "Hello from let";
        console.log(test); // Hello from let
    }
    console.log(test); // Error occers
}
exampleLet();
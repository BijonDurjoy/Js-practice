var a = "This is a global variable";
function hoisting(){
    console.log(a);
    var a = "This is a variable";
    console.log(a);
}
hoisting();

//undefined
//This is a variable
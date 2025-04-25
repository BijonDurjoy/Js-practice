function outer(){
    console.log("outer function");
    return function inner(){
        console.log("inner function");
    }
    //inner();
}
x = outer();
x();  //outer function    // inner function

//Lexical scope
function lexi() {
    let x = 10;
    function inner() {
        console.log(x); // এখানে x এর মান 10
    }
    inner();
}
lexi();

//Closure
function baba(elakabasi){
    let bari = "Shantiniketon";

    function chele(){
        if(!elakabasi){
            console.log("Anondaniketon");
        }
        let bike = "R15";
        console.log(bari);
    }
    chele();
}
baba(false); // Shantiniketon

//Perfect Closure
function baba(elakabasi) {
    let bari = "Shantiniketon";

    return function chele() {
        if (!elakabasi) {
            console.log("Anondaniketon");
        }
        console.log(bari); // Accessing `bari` from the outer function
    };
}

const cheleFunction = baba(false); // `baba` finishes execution here
cheleFunction(); 

//player names;
let player1 = "Player 1";
let player2 = "Player 2";

function editName(){
    player1 = prompt("Enter Player 1 name");
    player2 = prompt("Enter Player 2 name");

    if(player1.length <1 || player2.length <1){
        alert("Please Enter a valid Name");
        return;
    }
    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

function rollDice(){
    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");

    dice1.setAttribute("src","diceroll.gif")
    dice2.setAttribute("src","diceroll.gif")

    let result = document.querySelector('h1')
    result.innerHTML = ""
    setTimeout(()=>{
        let randomNumber1 = Math.floor(Math.random()*6)+1;
        let randomNumber2 = Math.floor(Math.random()*6)+1;
        
        dice1.setAttribute('src', 'dice'+randomNumber1+'.png');
        dice2.setAttribute('src', 'dice'+randomNumber2+'.png');

        //determine the winner
        if(randomNumber1 === randomNumber2){
            result.innerHTML = "Draw!";
        }
        else if(randomNumber1 < randomNumber2){
            result.innerHTML=(player2+" Wins!");
        }
        else{
            result.innerHTML=(player1+" Wins");
        }
    }, 2500);
}
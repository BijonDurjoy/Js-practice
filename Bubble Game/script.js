let timeLeft = 10;
function resetGame() {
    let bubbles = "";

    for (let i = 0; i < 176; i++) {
        let value = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${value}</div>`
    }
    let mainGameCanvas = document.querySelector(".main-canvas");
    mainGameCanvas.innerHTML = bubbles;
}

function addTimer() {
    let timer = setInterval(() => {
        if (timeLeft === 0) {
            clearInterval(timer);
            document.querySelector(".main-canvas").innerHTML = "Game over"
        }
        else {
            timeLeft--;
            document.querySelector("#current-time").innerHTML = timeLeft;
        }
    }, 1000);
}
resetGame();
addTimer();
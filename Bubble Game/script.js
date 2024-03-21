let timeLeft = 5;
let curntTarget = 0;
let score = 0;
function resetGame() {
    let bubbles = "";

    for (let i = 0; i < 176; i++) {
        let value = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${value}</div>`
    }
    curntTarget = Math.floor(Math.random() * 10);
    document.querySelector("#target-value").innerHTML = curntTarget
    let mainGameCanvas = document.querySelector(".main-canvas");
    mainGameCanvas.innerHTML = bubbles;
}

function addTimer() {
    let timer = setInterval(() => {
        if (timeLeft === 0) {
            clearInterval(timer);
            document.querySelector(".main-canvas").innerHTML =
            `<div class="gameover">
            <div>Game Over!</div>
            <div>Score ${score}</div>
        </div>`;
        }
        else {
            timeLeft--;
            document.querySelector("#current-time").innerHTML = timeLeft;
        }
    }, 1000);
}

document.querySelector(".main-canvas").addEventListener("click", (x) => {
    let num = Number(x.target.innerHTML);
    if (num === curntTarget) {
        resetGame();
        score += timeLeft;
        timeLeft = 10;
        document.querySelector("#score").innerHTML = score;
    }
    else {
        timeLeft = 0;
    }
})
resetGame();
addTimer();
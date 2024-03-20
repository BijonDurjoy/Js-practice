let bubbles="";

for(let i=0; i<176; i++){
    bubbles += '<div class="bubble">1</div>'
}
let mainGameCanvas = document.querySelector(".main-canvas");
mainGameCanvas.innerHTML = bubbles;
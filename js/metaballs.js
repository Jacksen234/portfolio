class Ball {
    constructor() {
        this.speedX = getRandom(0, 0.3);
        this.speedY = getRandom(0, 0.1);
        this.dirX = getDir();
        this.dirY = getDir();
        this.diameter = getRandom(60, 150)
        this.xPos = getRandom(0, (canvasWidth - this.diameter));
        this.yPos = getRandom(0, (canvasHeight - this.diameter));
    }

    drawBall(ball){
        ball.style.width = `${this.diameter}px`;
        ball.style.height = `${this.diameter}px`;
        ball.style.top = `${this.yPos}px`;
        ball.style.left = `${this.xPos}px`;
    }
    updateBall(){
        if (this.xPos <= 0 || this.xPos >= canvasWidth - (this.diameter)) {
            this.dirX *= -1;
        }
        if (this.yPos <= 0 || this.yPos >= canvasHeight - (this.diameter)) {
            this.dirY *= -1;
        }
        this.xPos += (this.speedX * this.dirX);
        this.yPos += (this.speedY * this.dirY);

    }
}


const canvasMeta = document.getElementById('meta-container');
const canvasWidth = canvasMeta.offsetWidth;
const canvasHeight = canvasMeta.offsetHeight;
const amountBalls = 8;
const ballArr = [];

for (let i = 0; i < amountBalls; i++) {
    ballArr[i] = new Ball();
}
ballArr.forEach(() => {
    let ball = document.createElement('div');
    ball.classList.add('ball');
    canvasMeta.appendChild(ball);
})

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function getDir(){
    let val = Math.random();
    return val > 0.5 ? 1:-1;
}

let lastRenderTime = 0;
let fps = 50;

function mainLoop(currTime) {
    const secFromLast = (currTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(mainLoop);
    if (secFromLast < 1 / fps) return;
    lastRenderTime = currTime;
    updateBalls();
}
window.requestAnimationFrame(mainLoop);


function updateBalls() {
    for (let i = 0; i < ballArr.length; i++) {
        ballArr.forEach((ball, index) => {
            ball.updateBall();
            ball.drawBall(document.getElementsByClassName('ball')[index]);
        })
    }
}


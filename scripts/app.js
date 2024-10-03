//@ts-check
import { canvas, ctx, } from "./common/canvas.js";
import { Player } from "./player.js";

let player = new Player();
player.draw();
console.log ("hello");

let lastTimeStamp = 0;

function gameLoop(timestamp) {
    let elapsedTime = timestamp - lastTimeStamp
    lastTimeStamp = timestamp

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update();
    player.draw();  
    window.requestAnimationFrame(gameLoop);

}

window.requestAnimationFrame(gameLoop);
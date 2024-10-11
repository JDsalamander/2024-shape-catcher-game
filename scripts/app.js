//@ts-check
import { canvas, ctx, } from "./common/canvas.js";
import { GameManager } from "./game-manager.js";

let game = new GameManager
game.initialize();

let lastTimeStamp = 0;

function gameLoop(timestamp) {
    let elapsedTime = timestamp - lastTimeStamp
    lastTimeStamp = timestamp

    game.update(elapsedTime);
    game.draw();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
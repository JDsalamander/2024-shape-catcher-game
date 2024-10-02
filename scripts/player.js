//@ts-check
import { canvas, ctx } from "./common/canvas.js";

export class Player {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 75;
        this.height = 25;

        this.speed = 1;
        
        this.keyBindings = {
            up: "ArrowUp",
            down: "ArrowDown",
            left: "ArrowLeft",
            right: "ArrowRight",
        }
        
        this.wireUpKeyboard();
    }

    moving ={
        up: false,
        down: false,
        left: false,
        right: false,
    }

    wireUpKeyboard() {
        window.addEventListener("keydown", (e) => {
            console.log(e);

            switch(e.code) {
                case this.keyBindings.up:
                    this.moving.up = true;
                    break;
                case this.keyBindings.down:
                    this.moving.down = true;
                    break;
                case this.keyBindings.left:
                    this.moving.left = true;
                    break;
                case this.keyBindings.up:
                    this.moving.right = true;
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            console.log(e);
            switch(e.code) {
                case this.keyBindings.up:
                    this.moving.up = false;
                    break;
                case this.keyBindings.down:
                    this.moving.down = false;
                    break;
                case this.keyBindings.left:
                    this.moving.left = false;
                    break;
                case this.keyBindings.up:
                    this.moving.right = false;
                    break;
            }
        });
    }

    update() {
        let directionX = 0;
        let directionY = 0;

        if (this.moving.up) {
            directionY = -1;
        }

        if (this.moving.down) {
            directionY = 1;
        }

        if (this.moving.left) {
            directionX = -1;
        }

        if (this.moving.right) {
            directionX = 1;
        }

        this.y += this.speed * directionY
        this.x += this.speed * directionX
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
       
    }
}
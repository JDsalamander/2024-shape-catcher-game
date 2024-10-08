//@ts-check
import { canvas, ctx } from "./common/canvas.js";

export class Player {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 75;
        this.height = 25;

        this.speed = 10;
        
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
            //console.log(e);

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
                case this.keyBindings.right:
                    this.moving.right = true;
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            //console.log(e);
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
                case this.keyBindings.right:
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

        if (this.moving.up && this.moving.down) {
            directionY = 0
        }

        if (this.moving.left) {
            directionX = -1;
        }

        if (this.moving.right) {
            directionX = 1;
        }

        if (this.moving.left && this.moving.right) {
            directionX = 0;
        }

        this.y += this.speed * directionY
        this.x += this.speed * directionX

        //prevent going off left
        if (this.x < 0) {
            this.x = 0
        }

        //prevent going off top
        if (this.y < 0) {
            this.y = 0
        }

        //prevent going off right
        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width;
        }

        //prevent going off bottom
        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
        }
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
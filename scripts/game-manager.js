//@ts-check

import { canvas } from "./common/canvas.js";
import { Player, Player2 } from "./player.js";
import { SimpleGoodItem } from "./collectables/good.js"

export class GameManager {
    constructor() {
        this.players = [];
        this.collectables = [];
        this.enemies = [];

        this.isGameOver = false;

        this.goodSpawn = {
            lastTime: 0,
            nextTime: 0,
            next: function () {
                this.lastTime= 0
                this.nextTime = rand(2 * 1000, 5 * 1000)
            },
        };

        this.spawner(0); 
    }

    initialize() {
        this.players = [];
        let p1 = new Player(canvas.height / 2, canvas.width / 2)
        p1.x -= p1.width / 2;
        p1.y -= p1.height / 2;
        p1.x -= 50;
        
        this.players = [];
        let p2 = new Player2(canvas.height / 2, canvas.width / 2)
        p2.x -= p2.width / 2;
        p2.y -= p2.height / 2;
        p2.x += 50;
        
        this.players.push(p2);
    }

    update(elapsedTime) {
        this.spawner(elapsedTime);

        this.players.forEach(p => {
            p.update();
        })

        this.collectables.forEach(c => {
            c.update();
        })
    }

    spawner(elapsedTime) {
        this.goodSpawn.lastTime += elapsedTime;
        
        if(this.goodSpawn.lastTime > this.goodSpawn.nextTime) {
            //spawn a good item
            const buffer = 50
            const sx = rand(buffer, canvas.width - buffer)
            const sy = rand(buffer, canvas.height - buffer)
            const item = new SimpleGoodItem(sx, sy)
            this.collectables.push(item);
            // reset the spawn timer and get a new spawn time
			this.goodSpawn.next();
			//debugger;
        }
    }

    draw() {
        this.players.forEach(p => {
            p.draw();
        })

        this.collectables.forEach(c => {
            c.draw();
        })
    }
}

function rand(min, max) {
    let upper = max - min;
    let r = Math.floor(Math.random() * upper) + min;
    return r;
}

console.log("does this work")
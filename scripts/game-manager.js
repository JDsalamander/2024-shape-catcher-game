//@ts-check

import { canvas } from "./common/canvas";
import { Player } from "./player.js";

export class GameManager {
    constructor() {
        this.players = [];
        this.collectables = [];
        this.enemies = [];

        this.isGameOver = false;

        this.goodSpawn = {
            lastTIme: 0,
            nextTIme: Math.min(rand(15), 5),
            getNewNExt: function() {
                this.nextTIme = Math.min(rand(15), 5)
            }
        };
    }

    initialize() {
        this.players = [];
        let p1 = new Player(canvas.height / 2, canvas.width / 2)
    p1.x -= p1.width / 2;
    p1.x -= p1.height / 2;
        this.players.push(p1);
    }

    update(elapsedTime) {
        this.players.forEach(p => {
            p.update();
        })
        this.collectables.forEach(c => {
            c.update();
        })
    }

    spawner(elapsedTime) {
        
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

function rand(max = 100) {
    let r = Math.floor(Math.random() * max + 1);
    return r;
}r
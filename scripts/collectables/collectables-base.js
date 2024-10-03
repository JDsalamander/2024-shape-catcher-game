//@ts-check

export class collectableItem {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;

        this.isCollected = false;
        this.pointValue = 0
    }

    update() {}
    draw() {}
}
"use strict";
class VirtualPoint {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    print() {
        console.log(`Point (${this.x}, ${this.y})`);
    }
}
const point = { x: 1, y: 2 };
const virtualPoint = new VirtualPoint(1, 2);
console.log(point);
virtualPoint.print();

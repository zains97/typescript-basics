interface Point {
    x: number
    y: number
}

class VirtualPoint {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    
    print() {
        console.log(`Point (${this.x}, ${this.y})`)
    }
}

const point: Point = { x: 1, y: 2 }
const virtualPoint: VirtualPoint = new VirtualPoint(1, 2)

console.log(point)
virtualPoint.print()
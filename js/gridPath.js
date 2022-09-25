const playgroundElement = document.getElementById("playground")
const minSize = Math.min(window.innerWidth, window.innerHeight)
const controlHeight = 224
let padding = 48
if (window.innerHeight + controlHeight < window.innerWidth) {
    padding = padding + controlHeight
}
const scale = 2

playgroundElement.style.width = `${minSize - padding}px`
playgroundElement.style.height = `${minSize - padding}px`

const canvas = document.createElement("canvas")
canvas.style.width = `${minSize - padding}px`
canvas.style.height = `${minSize - padding}px`
canvas.width = minSize * scale;
canvas.height = minSize * scale;
playgroundElement.appendChild(canvas)


class Config {
    constructor(minSize, scale) {
        this.rows = 3
        this.columns = 4
        this.circleRadius = 8
        this.scale = scale
        this.length = Math.floor(minSize / this.columns) * this.scale
        this.gridWith = this.length / this.scale * (this.columns - 1)
        this.gridPadding = (minSize - this.gridWith) / 2
        this.offset = (minSize - this.gridWith - this.gridPadding) * this.scale
        this.inactiveColor = '#444'
        this.strokeColor = 'white'
        this.strokeActiveColor = '#fcbe24'
    }
}

class Board {
    constructor(config, canvas) {
        this.config = config
        this.ctx = canvas.getContext("2d");
        this.ctx.lineWidth = 4;
    }

    drawLine(from, to, color) {
        this.ctx.strokeStyle = color;
        const startX = this.getXCoordinate(from)
        const startY = this.getYCoordinate(from)
        const endX = this.getXCoordinate(to)
        const endY = this.getYCoordinate(to)
        this.ctx.beginPath()
        this.ctx.moveTo(startX, startY)
        this.ctx.lineTo(endX, endY)
        this.ctx.stroke()
        this.ctx.strokeStyle = this.config.strokeColor
        this.drawCircle(startX, startY, this.config.strokeColor)
        this.drawCircle(endX, endY, this.config.strokeActiveColor)
    }

    drawCircle(x, y, color) {
        this.ctx.strokeStyle = color
        this.ctx.fillStyle = color
        this.ctx.beginPath();
        this.ctx.arc(
            x,
            y,
            this.config.circleRadius * this.config.scale,
            0,
            Math.PI * 2,
            true
        );
        this.ctx.closePath();
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.strokeStyle = this.config.strokeColor
    }

    getXCoordinate(position) {
        return (position - 1) % this.config.columns * this.config.length + this.config.offset
    }

    getYCoordinate(position) {
        return Math.floor((position - 1) / this.config.columns) * this.config.length + this.config.offset
    }
}

class Game {
    constructor(config, board) {
        this.config = config
        this.points = []
        this.board = board
    }

    createBoard() {
        for (let position = 1; position <= this.config.rows * this.config.columns; position++) {
            this.points.push(new Point(position, this.config))
            this.board.drawCircle(
                this.board.getXCoordinate(position),
                this.board.getYCoordinate(position),
                this.config.inactiveColor
            )
        }
        this.createLinks()
        this.currentPoint = this.points[0]
    }

    createLinks() {
        for (let point of this.points) {
            if (point.canGoUp()) {
                point.pointUp = this.points[point.position - this.config.columns - 1]
            }
            if (point.canGoRight()) {
                point.pointRight = this.points[point.position]
            }
            if (point.canGoDown()) {
                point.pointDown = this.points[point.position + this.config.columns - 1]
            }
            if (point.canGoLeft()) {
                point.pointLeft = this.points[point.position - 2]
            }
        }
    }

    controls(key) {
        switch (key) {
            case "ArrowLeft":
            case "a":
                if (this.currentPoint.canGoLeft()) {
                    this.board.drawLine(
                        this.currentPoint.position,
                        this.currentPoint.pointLeft.position,
                        this.config.strokeColor
                    )
                    this.currentPoint = this.currentPoint.pointLeft
                }
                break;
            case "ArrowRight":
            case "d":
                if (this.currentPoint.canGoRight()) {
                    this.board.drawLine(
                        this.currentPoint.position,
                        this.currentPoint.pointRight.position,
                        this.config.strokeColor
                    )
                    this.currentPoint = this.currentPoint.pointRight
                }
                break;
            case "ArrowUp":
            case "w":
                if (this.currentPoint.canGoUp()) {
                    this.board.drawLine(
                        this.currentPoint.position,
                        this.currentPoint.pointUp.position,
                        this.config.strokeColor
                    )
                    this.currentPoint = this.currentPoint.pointUp
                }
                break;
            case "ArrowDown":
            case "s":
                if (this.currentPoint.canGoDown()) {
                    this.board.drawLine(
                        this.currentPoint.position,
                        this.currentPoint.pointDown.position,
                        this.config.strokeColor
                    )
                    this.currentPoint = this.currentPoint.pointDown
                }
                break;
        }
    }
}

class Point {
    constructor(position, config) {
        this.position = position
        this.config = config
        this.pointUp = null
        this.pointRight = null
        this.pointDown = null
        this.pointLeft = null
    }

    canGoUp() {
        return this.position - this.config.columns > 0
    }

    canGoRight() {
        return this.position % this.config.columns !== 0
    }

    canGoDown() {
        return (
            this.position + this.config.columns
            <= this.config.rows * this.config.columns
        )
    }

    canGoLeft() {
        return this.position - 1 % this.config.columns !== 0
    }
}

config = new Config(minSize, scale)
game = new Game(config, new Board(config, canvas))
game.createBoard()

function pressKey(key) {
    game.controls(key)
}

window.addEventListener('keydown', (event) => {
    game.controls(event.key)
})

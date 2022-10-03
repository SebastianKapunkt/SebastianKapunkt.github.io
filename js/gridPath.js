class Config {
    constructor() {
        this.rows = 10
        this.columns = 10
        this.circleRadius = 8
        this.scale = 2
        this.controlHeight = 224
        this.padding = 48
        this.minSize = Math.min(window.innerWidth, window.innerHeight)
        this.length = Math.floor(this.minSize / this.columns) * this.scale
        this.gridWith = this.length / this.scale * (this.columns - 1)
        this.gridPadding = (this.minSize - this.gridWith) / 2
        this.offset = (this.minSize - this.gridWith - this.gridPadding) * this.scale
        this.inactiveColor = '#444'
        this.strokeColor = 'white'
        this.strokeActiveColor = '#fcbe24'
    }
}

class Board {
    constructor(config, canvasId) {
        const playgroundElement = document.getElementById(canvasId)
        let padding = config.padding

        if (window.innerHeight + config.controlHeight < window.innerWidth) {
            padding = config.padding + config.controlHeight
        }

        playgroundElement.style.width = `${config.minSize - padding}px`
        playgroundElement.style.height = `${config.minSize - padding}px`

        const canvas = document.createElement("canvas")
        canvas.style.width = `${config.minSize - padding}px`
        canvas.style.height = `${config.minSize - padding}px`
        canvas.width = config.minSize * config.scale;
        canvas.height = config.minSize * config.scale;
        playgroundElement.appendChild(canvas)

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
    constructor(board, columns, rows, inactiveColor, strokeColor) {
        this.points = []
        this.board = board
        this.columns = columns
        this.rows = rows
        this.strokeColor = strokeColor
        this.inactiveColor = inactiveColor
        this.currentPoint = null
    }

    createBoard() {
        for (let position = 1; position <= this.rows * this.columns; position++) {
            this.points.push(new Point(position, this.columns, this.rows))
            this.board.drawCircle(
                this.board.getXCoordinate(position),
                this.board.getYCoordinate(position),
                this.inactiveColor
            )
        }
        this.createLinks()
        this.currentPoint = this.points[0]
    }

    createLinks() {
        for (let point of this.points) {
            if (point.canGoUp()) {
                point.pointUp = this.points[point.position - this.columns - 1]
                point.up = true
            }
            if (point.canGoRight()) {
                point.pointRight = this.points[point.position]
                point.right = true
            }
            if (point.canGoDown()) {
                point.pointDown = this.points[point.position + this.columns - 1]
                point.down = true
            }
            if (point.canGoLeft()) {
                point.pointLeft = this.points[point.position - 2]
                point.left = true
            }
        }
    }

    controls(key) {
        switch (key) {
            case "ArrowUp":
            case "w":
                if (this.currentPoint.canGoUp() && this.currentPoint.up) {
                    this.board.drawLine(
                        this.currentPoint.position,
                        this.currentPoint.pointUp.position,
                        this.strokeColor
                    )
                    this.currentPoint = this.currentPoint.updateUp()
                }
                break;
            case "ArrowRight":
            case "d":
                if (this.currentPoint.canGoRight() && this.currentPoint.right) {
                    this.board.drawLine(
                        this.currentPoint.position,
                        this.currentPoint.pointRight.position,
                        this.strokeColor
                    )
                    this.currentPoint = this.currentPoint.updateRight()
                }
                break;
            case "ArrowDown":
            case "s":
                if (this.currentPoint.canGoDown() && this.currentPoint.down) {
                    this.board.drawLine(
                        this.currentPoint.position,
                        this.currentPoint.pointDown.position,
                        this.strokeColor
                    )
                    this.currentPoint = this.currentPoint.updateDown()
                }
                break;
            case "ArrowLeft":
            case "a":
                if (this.currentPoint.canGoLeft() && this.currentPoint.left) {
                    this.board.drawLine(
                        this.currentPoint.position,
                        this.currentPoint.pointLeft.position,
                        this.strokeColor
                    )
                    this.currentPoint = this.currentPoint.updateLeft()
                }
                break;
        }
    }
}

class Point {
    constructor(position, columns, rows) {
        this.position = position
        this.columns = columns
        this.rows = rows
        this.pointUp = null
        this.pointRight = null
        this.pointDown = null
        this.pointLeft = null
        this.up = false
        this.right = false
        this.down = false
        this.left = false
    }

    canGoUp() {
        return this.position - this.columns > 0
    }

    canGoRight() {
        return this.position % this.columns !== 0
    }

    canGoDown() {
        return (
            this.position + this.columns
            <= this.rows * this.columns
        )
    }

    canGoLeft() {
        return (this.position - 1) % this.columns !== 0
    }

    updateUp() {
        this.up = false
        this.pointUp.down = false
        return this.pointUp
    }

    updateRight() {
        this.right = false
        this.pointRight.left = false
        return this.pointRight
    }

    updateDown() {
        this.down = false
        this.pointDown.up = false
        return this.pointDown
    }

    updateLeft() {
        this.left = false
        this.pointLeft.right = false
        return this.pointLeft
    }
}

config = new Config()
board = new Board(config, "playground")
game = new Game(board, config.columns, config.rows, config.inactiveColor, config.strokeColor)
game.createBoard()

function pressKey(key) {
    game.controls(key)
}

window.addEventListener('keydown', (event) => {
    game.controls(event.key)
})

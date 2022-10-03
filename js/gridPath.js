class Config {
    constructor() {
        this.rows = 3
        this.columns = 4
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

        if (window.innerHeight < window.innerWidth + config.controlHeight) {
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

class Rules {
    constructor(board, columns, rows, inactiveColor, strokeColor, startPoint) {
        this.board = board
        this.columns = columns
        this.rows = rows
        this.strokeColor = strokeColor
        this.inactiveColor = inactiveColor
        this.currentPoint = startPoint
    }

    createBoard() {
        for (let position = 1; position <= this.rows * this.columns; position++) {
            this.board.drawCircle(
                this.board.getXCoordinate(position),
                this.board.getYCoordinate(position),
                this.inactiveColor
            )
        }
    }

    controlToDirection(key) {
        let direction = ''
        switch (key) {
            case "ArrowUp":
            case "w":
                direction = 'up'
                break;
            case "ArrowRight":
            case "d":
                direction = 'right'
                break;
            case "ArrowDown":
            case "s":
                direction = 'down'
                break;
            case "ArrowLeft":
            case "a":
                direction = 'left'
                break;
        }
        return direction
    }

    moveNextPoint(direction) {
        const nextDirection = this.currentPoint.linkedPoints.find(
            point => point.direction === direction
        )
        if (nextDirection && nextDirection.canGo && nextDirection.inBoundary) {
            this.board.drawLine(
                this.currentPoint.position,
                nextDirection.point.position,
                this.strokeColor
            )
            this.currentPoint.updatePath(nextDirection.point)
            this.currentPoint = nextDirection.point
        }
    }
}

class GridPath {
    constructor(board, columns, rows) {
        this.columns = columns
        this.rows = rows
        this.board = board
    }

    createPoints() {
        let points = []
        for (let position = 1; position <= this.rows * this.columns; position++) {
            points.push(new Point(position, this.columns, this.rows))
        }
        this.createLinks(points)
        return points
    }

    createLinks(points) {
        for (let point of points) {
            for (let direction of ['up', 'right', 'down', 'left']) {
                const linkedPoint = point.linkedPoints.find(point => point.direction === direction)
                if (linkedPoint.inBoundary) {
                    linkedPoint.point = points[this.directionCaculation(direction, point)]
                    linkedPoint.canGo = true
                }
            }
        }
    }

    directionCaculation(direction, point) {
        switch (direction) {
            case 'up':
                return point.position - this.columns - 1
            case 'right':
                return point.position
            case 'down':
                return point.position + this.columns - 1
            case 'left':
                return point.position - 2
        }
    }

    createSolvePath() {
        let pathFound = false
        let solvedPath = []
        do {
            solvedPath = this.randomPath(this.createPoints())
            pathFound = solvedPath[0]
        } while (!pathFound)
        for (let i = 0; i < solvedPath[1].length - 1; i++) {
            this.board.drawLine(
                solvedPath[1][i].position,
                solvedPath[1][i + 1].position,
                "green"
            )
        }
        return solvedPath
    }

    createNegative() {
        const solvePath = this.createSolvePath()
    }

    randomPath(points) {
        const solvedPath = []
        let currentPoint = points[0]
        solvedPath.push(currentPoint)
        for (let i = 1; i < this.columns + this.columns; i++) {
            const nextPoints = currentPoint.linkedPoints.filter(
                point => point.canGo
            ).map(
                linkedPoint => linkedPoint.point
            )
            if (nextPoints.length === 0) {
                return false
            }
            const randomPoint = nextPoints[Math.floor(Math.random() * nextPoints.length)]
            solvedPath.push(randomPoint)
            currentPoint.updatePath(randomPoint)
            currentPoint = randomPoint
        }
        return [true, solvedPath]
    }
}

class Point {
    constructor(position, columns, rows) {
        this.position = position
        this.linkedPoints = [
            {
                direction: 'up',
                canGo: false,
                inBoundary: this.position - columns > 0,
                point: null
            },
            {
                direction: 'right',
                canGo: false,
                inBoundary: this.position % columns !== 0,
                point: null
            },
            {
                direction: 'down',
                canGo: false,
                inBoundary: this.position + columns <= rows * columns,
                point: null
            },
            {
                direction: 'left',
                canGo: false,
                inBoundary: (this.position - 1) % columns !== 0,
                point: null
            }
        ]
    }

    updatePath(nextPoint) {
        this.linkedPoints.find(point => point.point === nextPoint).canGo = false
        nextPoint.linkedPoints.find(point => point.point === this).canGo = false
        return nextPoint
    }
}

config = new Config()
board = new Board(config, "playground")
gridPath = new GridPath(board, config.columns, config.rows)
gridPath.createSolvePath()
rules = new Rules(
    board,
    config.columns,
    config.rows,
    config.inactiveColor,
    config.strokeColor,
    gridPath.createPoints()[0]
)
rules.createBoard()

function moveDirection(direction) {
    rules.moveNextPoint(direction)
}

window.addEventListener('keydown', (event) => {
    this.moveDirection(rules.controlToDirection(event.key))
})

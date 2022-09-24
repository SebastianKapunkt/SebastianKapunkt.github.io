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

const ctx = canvas.getContext("2d");
const strokeColor = 'white'
const strokeActiveColor = '#fcbe24'
ctx.strokeStyle = strokeColor;
ctx.lineWidth = 4;


const rows = 10
const columns = 10
const circleRadius = 8
const length = Math.floor((minSize - 48) / columns) * scale
const offset = (minSize - (rows * length / scale)) / 2 * scale

for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
        const x = length * column + offset
        const y = length * row + offset
        drawCircle(x,y, 'rgba(0,0,0,0.1)')
    }
}
drawCircle(getXCoordinate(1), getYCoordinate(1), strokeActiveColor)

function drawLine(from, to, color) {
    ctx.strokeStyle = color;
    const startX = getXCoordinate(from)
    const startY = getYCoordinate(from)
    const endX = getXCoordinate(to)
    const endY = getYCoordinate(to)
    ctx.beginPath()
    ctx.moveTo(startX,startY)
    ctx.lineTo(endX, endY)
    ctx.stroke()
    ctx.strokeStyle = strokeColor
    drawCircle(startX, startY, strokeColor)
    drawCircle(endX, endY, strokeActiveColor)
}

function getXCoordinate(position) {
    return (position - 1) % columns * length + offset
}

function getYCoordinate(position) {
    return Math.floor((position - 1) / columns) * length + offset
}

function drawCircle(x, y, color) {
    ctx.strokeStyle = color
    ctx.fillStyle = color
    ctx.beginPath();
    ctx.arc(x, y, circleRadius * scale, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill()
    ctx.stroke()
    ctx.strokeStyle = strokeColor
    ctx.strokeStyle = strokeColor
}

let currentNote = 1

function goLeft(note, columns) {
    const nextNote = note - 1
    if (nextNote % columns !== 0) {
        drawLine(note, note - 1, strokeColor)
        currentNote = nextNote
    }
}

function goRight(note, columns) {
    const nextNote = note + 1
    if (note % columns !== 0) {
        drawLine(note, nextNote, strokeColor)
        currentNote = nextNote
    }
}

function goUp(note, columns) {
    const nextNote = note - columns
    if (nextNote > 0) {
        drawLine(note, nextNote, strokeColor)
        currentNote = nextNote
    }
}

function goDown(note, columns, rows) {
    const nextNote = note + columns
    if (nextNote <= rows * columns) {
        drawLine(note, nextNote, strokeColor)
        currentNote = nextNote
    }
}

function controls(key) {
    switch (key) {
        case "ArrowLeft":
        case "a":
            goLeft(currentNote, columns)
            break;
        case "ArrowRight":
        case "d":
            goRight(currentNote, columns)
            break;
        case "ArrowUp":
        case "w":
            goUp(currentNote, columns)
            break;
        case "ArrowDown":
        case "s":
            goDown(currentNote, columns, rows)
            break;
    }
}

function pressKey(key) {
    controls(key)
}

window.addEventListener('keydown', (event) => {
    controls(event.key)
})

var canvas = document.getElementById("playground")
var ctx = canvas.getContext("2d");
ctx.strokeStyle = 'black';
ctx.canvas.width = window.innerWidth - 50;
ctx.canvas.height = window.innerHeight - 274;

const rows = 4
const columns = 4
const length = 75
const offset = 50

for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
        const x = length * column + offset
        const y = length * row + offset

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.stroke()
    }
}

function drawLine(from, to, color) {
    ctx.strokeStyle = color;
    ctx.beginPath()
    ctx.moveTo(
        (from - 1) % columns * length + offset,
        Math.floor((from - 1) / columns) * length + offset,
    )
    ctx.lineTo(
        (to - 1) % columns * length + offset,
        Math.floor((to - 1) / columns) * length + offset,
    )
    ctx.stroke()
}

let currentNote = 1
let lineColor = "black";

function goLeft(note, columns) {
    const nextNote = note - 1
    if (nextNote % columns !== 0) {
        drawLine(note, note - 1, lineColor)
        currentNote = nextNote
    }
}

function goRight(note, columns) {
    const nextNote = note + 1
    if (note % columns !== 0) {
        drawLine(note, nextNote, lineColor)
        currentNote = nextNote
    }
}

function goUp(note, columns) {
    const nextNote = note - columns
    if (nextNote > 0) {
        drawLine(note, nextNote, lineColor)
        currentNote = nextNote
    }
}

function goDown(note, columns, rows) {
    const nextNote = note + columns
    if (nextNote <= rows * columns) {
        drawLine(note, nextNote, lineColor)
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

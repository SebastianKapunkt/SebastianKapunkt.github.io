var canvas = document.getElementById("playground")
var ctx = canvas.getContext("2d");
ctx.strokeStyle = 'black';
ctx.canvas.width = window.innerWidth - 50;
ctx.canvas.height = window.innerHeight - 50;

const rows = 10
const columns = 12
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

let note = 1

window.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 65:
    case 37:
      drawLine(note, note - 1, "green")
      note = note - 1
      break;
    case 68:
    case 39:
      drawLine(note, note + 1, "green")
      note = note + 1
      break;
    case 87:
    case 38:
      drawLine(note, note - columns, "green")
      note = note - columns
      break;
    case 83:
    case 40:
      drawLine(note, note + columns, "green")
      note = note + columns
      break;
  }
})

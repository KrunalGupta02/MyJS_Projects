const canvas = document.getElementById("draw");

// getContext('2d') is a method in HTML5 canvas that returns a 2D rendering context for the canvas.
const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "square";
ctx.lineWidth = 100;

let hue = 0;
// This is just a flag to increase the size of pointer
let direction = true;

// ctx.globalCompositeOperation = "multiply";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) {
    // Stop the func from running when they are not moused down.
    return;
  }
  console.log(e);

  ctx.beginPath();

  // start from
  ctx.moveTo(lastX, lastY);

  // go to
  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  hue++;

  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => (isDrawing = false));

canvas.addEventListener("mouseout", () => (isDrawing = false));

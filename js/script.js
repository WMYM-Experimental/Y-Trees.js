const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const biggers = [
  "#e5e5e5",
  "#caf0f8",
  "#ede0d4",
  "#94d2bd",
  "#c2c5aa",
  "#d8f3dc",
  "#edf6f9",
  "#e0fbfc",
];

const tinies = [
  "#370617",
  "#9d0208",
  "#dc2f02",
  "#f48c06",
  "#faa307",
  "#9b111e",
  "#fca311",
  "#fcbf49",
  "#370617",
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomFloat = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

// recursive functions that draws a branch
const branch = (xo, yo, lenght, branchWidth, angle, rot) => {
  let color;

  // set line width
  ctx.lineWidth = branchWidth;
  ctx.beginPath();

  // save current state => important to make 2 branches
  ctx.save();

  // change color based on the lenght
  if (lenght > 50) {
    color = biggers[getRandomInt(0, biggers.length - 1)];
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
  } else {
    color = tinies[getRandomInt(0, tinies.length - 1)];
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
  }

  //ranslates the ctx by xo horizontally and yo vertically.
  ctx.translate(xo, yo); // make a new Origin reference
  ctx.moveTo(0, 0); // move to new Origin

  // rotate so a specific angle
  ctx.rotate((angle * Math.PI) / 180); // starts always in "0" so the first is always vertically rect
  ctx.lineTo(0, -lenght); // line from new Origin 0 to lenght value
  ctx.stroke();

  // check lenght status => final condition of recursion
  if (lenght < 10) {
    ctx.restore();
    return;
  }

  // make 2 branches from base branch
  // move to the previous lenght branch => New Origin
  branch(0, -lenght, lenght * 0.8, branchWidth * 0.8, angle - rot, rot); //to left
  branch(0, -lenght, lenght * 0.8, branchWidth * 0.8, angle + rot, rot); // to right

  // restore the most recently saved canvas state => Thats we use save()
  ctx.restore();
};

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  this.location.reload();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    branch(
      canvas.width / 2 + 20,
      canvas.height / 2 + 300,
      130,
      5,
      0,
      getRandomFloat(0, 75)
    );
  }
});

document.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  branch(
    canvas.width / 2 + 20,
    canvas.height / 2 + 300,
    130,
    5,
    0,
    getRandomFloat(0, 75)
  );
});

branch(canvas.width / 2 + 20, canvas.height / 2 + 300, 130, 5, 0, 15);

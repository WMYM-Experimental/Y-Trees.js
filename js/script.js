const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomFloat = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

const branch = (xo, yo, lenght, branchWidth) => {
  ctx.lineWidth = branchWidth;
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#000000";
  ctx.translate(xo, yo);
  ctx.rotate(0); // wanna improve this
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -lenght);
  ctx.stroke();
  return;
};

branch(canvas.width / 2 + 50, canvas.height / 2 + 200, 120, 40);

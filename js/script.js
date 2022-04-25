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

const branch = (xo, yo, lenght, branchWidth, angle) => {
  const colors = [
    "#9139B4",
    "#FE3E6D",
    "#DA6D73",
    "#DCB687",
    "#42A6D8",
    "#9b111e",
  ];

  ctx.lineWidth = branchWidth;
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = colors[getRandomInt(0, colors.length - 1)];
  ctx.fillStyle = colors[getRandomInt(0, colors.length - 1)];
  ctx.translate(xo, yo);
  ctx.rotate((angle * Math.PI) / 180); // wanna improve this
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -lenght);
  ctx.stroke();

  if (lenght < 10) {
    ctx.restore();
    return;
  }
  branch(0, -lenght, lenght * 0.8, branchWidth * 0.8, angle - 15);
  branch(0, -lenght, lenght * 0.8, branchWidth * 0.8, angle - 15);
};

branch(canvas.width / 2 + 50, canvas.height / 2 + 200, 120, 5, 0);

var ctx = document.getElementById('myCanvas').getContext('2d');
var num = [];
var pos = [180, 380, 580]
var pos1 = [80, 280, 480]
var goBack = []
for (x = 0; x < 1080; x += 240) {
  for (y = 0; y < 600; y += 200) {
    ctx.fillStyle = "#f2bf34";
    ctx.fillRect(x, y, 120, 100);
  }
}

for (x = 120; x < 1080; x += 240) {
  for (y = 100; y < 600; y += 200) {
    ctx.fillStyle = "rgb(107, 230, 226, 0.4)";
    ctx.fillRect(x, y, 120, 100);

  }
}

function goBak(){
  ctx.beginPath();
  ctx.fillStyle = "rgba(228, 244, 145, 0.43)";
  ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
}
function initCanvas() {
    ctx.canvas.addEventListener('click', function(event) {
    mouseX = event.clientX - 80;
    mouseY = event.clientY - 66;
    goBack.push(mouseX,mouseY);
    fillCircle();

  });
}

function fillCircle() {
  ctx.beginPath();
  ctx.fillStyle = "rgba(226, 95, 95, 0.58)";
  ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
}
window.addEventListener('load', function(event) {
  initCanvas();
});

function uniq(a) {
  return a.sort().filter(function(item, pos, ary) {
    return !pos || item != ary[pos - 1];
  })
}

function drawRandNums(t, x, y) {
  num = [];
  var ctx = document.getElementById('myCanvas').getContext('2d');
  ctx.lineWidth = "2";
  ctx.strokeStyle = "black";
  ctx.font = "80px Times New Roman";
  ctx.strokeText(t, x, y);

}

function randomNum(min, max) {

  n = Math.floor(Math.random() * (max - min) + min);

  for (i = 0; i < num.length; i++) {

    if (n == num[i]) {
      randomNum(min, max);
    }

  }

  num.push(n);

}

function select(min, max, x, p) {

  for (j = 0; j < 3; j++) {
    randomNum(min, max)
  }

  var order = uniq(num);

  for (i = 0; i < 3; i++) {
    drawRandNums(order[i], x, p[i])
  }
}

select(1, 10, 40, pos)
select(10, 20, 140, pos1)
select(20, 30, 260, pos)
select(30, 40, 380, pos1)
select(40, 50, 500, pos)
select(50, 60, 620, pos1)
select(60, 70, 740, pos)
select(70, 80, 860, pos1)
select(80, 91, 980, pos)
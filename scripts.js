
var canvas = document.getElementById('myCanvas');

var rectangle = canvas.getContext('2d');
var x = canvas.x;
var y = canvas.y;
x = 10;
y = 10;

function draw() {
rectangle.fillStyle='rgba(0, 0, 225, 0.5)';
rectangle.fillRect(x,y,30, 22);
}

for (var i = 0; i < 10; i++) {
  x += 15;
  y += 11;
  draw();
}


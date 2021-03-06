function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  for (let i = 0; i < 360; i++) {
    let rad = 200;
    let x = rad * cos(i);
    let y = rad * sin(i);
    let xoff = map(mouseX, 0, 400, -100, 100, 1);
    let yoff = map(mouseY, 0, 400, -100, 100, 1);
    stroke(random(255), random(255), 100);
    strokeWeight(3);
    line(xoff, yoff, x, y);
    stroke(0);
    fill(0);
    ellipse(xoff, yoff, 30, 30);
  }
}

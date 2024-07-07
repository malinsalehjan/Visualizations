let t = 0; // time variable
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0,0);
  noStroke();
}

function draw() {
    background(260); // remove this if u want studio ghibli cursor :3
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    let x = mouseX;
    let y = mouseY;

    let noiseFactor = noise(t) * 50; // noise factor to create pulsating effect
    let size = 20 + noiseFactor; // base size plus noise

    drawScrumble(x, y, size);

    t += 0.05; // increment time for noise function
  }
}

function drawScrumble(x, y, size) {
  stroke(20); 
  for (let i = 0; i < 100; i++) {
    let angle = random(10);
    let radius = size * random();
    let xOffset = cos(angle) * radius;
    let yOffset = sin(angle) * radius;
    line(x + xOffset, y + yOffset, x - xOffset, y - yOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

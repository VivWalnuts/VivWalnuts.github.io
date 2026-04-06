function setup() {
createCanvas(600, 600);
background(255, 23, 96)
}
function draw() {
if (mouseIsPressed) {
fill(0);
} else {
fill(255);
}
ellipse(mouseX, mouseY, 80, 80);
}

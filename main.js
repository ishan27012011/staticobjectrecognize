img=""

function preload() {
img=loadImage("dog_cat.jpg");    
}

function setup() {
canvas=createCanvas(640,420);
canvas.center();    
}

function draw() {
image(img, 0, 0, 640, 420);
fill("blue");
textSize(25);
text("Dog", 45, 75);
noFill();
stroke("red")
rect(30, 50, 450, 350)
}
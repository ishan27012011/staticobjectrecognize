img = "";
status = "";

function preload() {
        img = loadImage("dog_cat.jpg");
}

function setup() {
        canvas = createCanvas(640, 420);
        canvas.center();
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
        console.log("Model Loaded!");
        objectDetector.detect(img, gotResults);
        status = true;
}

function gotResults(error, results) {
        if (error) {
                console.log(error);
        };
        console.log(results);
}

function draw() {
        image(img, 0, 0, 640, 420);
        fill("blue");
        textSize(25);
        text("Dog", 45, 75);
        text("Cat", 320, 120);
        noFill();
        strokeWeight(2);
        stroke("blue");
        rect(30, 50, 450, 350);
        rect(300, 90, 270, 320);

}
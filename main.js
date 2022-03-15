function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 50, 50, 530, 390);
    fill("orange");
    rect(50,35,550,20);
    fill("red");
    rect(570,50,20,410);
    fill("orange");
    ellipse(580, 46, 55, 55);
    fill("red");
    rect(50,426,540,20);
    fill("orange");
    ellipse(580, 435, 55, 55);
    fill("red");
    rect(46,30,20,410);
    fill("orange");
    ellipse(56, 435, 55, 55);
    fill("orange");
    ellipse(56, 46, 55, 55);
}

function take_snapshot() {
    save('My_Framed_Pic.png');
}
function preload() {

}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.position(520, 280);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 380);
}
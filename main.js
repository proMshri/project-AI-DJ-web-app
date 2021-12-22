var song="";

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.position(600,100)
}

function preload() {
    song=loadSound("sound.mp3");
}

function draw() {
    image(video,0,0,600,400);
    video.hide();
}

function music() {
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}
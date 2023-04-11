song1 = "";
song2= "";
song1_playing = "";
song2_playing = "";
leftWrist = 0;
leftWrist = 0;
rightWrist = 0;
rightWrist = 0;
scoreLeftWrist = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill ("#FF0000");
    stroke("#FF0000");

    song1.isPlaying();
    song1_playing = "true";
    song2_playing = "false";

    if(scoreLeftWrist > 0.2)
    {
        circle(30, 30, 20);

    }

}

function modelLoaded(){
    console.log("poseNet is initialized.");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        results[0].pose.keypoints[9].score;
        console.log("score left wrist = " + scoreLeftWrist);
    }
}
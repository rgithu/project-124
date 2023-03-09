function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,550);
    canvas.position(580,75);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initilized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
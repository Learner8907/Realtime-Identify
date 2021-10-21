noseX=0;
noseY=0;
function preload(){
lip= loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){

canvas = createCanvas(300,300)
canvas.center()
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

PoseNet = ml5.poseNet(video, modelLoaded);
PoseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-19;
        noseY = results[0].pose.nose.y+15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
   image(lip, noseX, noseY, 40,40);
}
function take_snapshot(){
    save('myFilterImg.png');
}
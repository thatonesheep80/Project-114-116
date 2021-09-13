mX = 0;
mY = 0;

function takeSnap()
{
  save("Moustache.png");  
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(mous, mX, mY, 100, 100);
}

function preload()
{
 mous = loadImage("https://i.postimg.cc/TP0zF9Lf/m-removebg-preview.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    mX = results[0].pose.nose.x - 45;
    mY = results[0].pose.nose.y - 40;
    console.log("moustache's x =" + mX);
    console.log("moustache's y =" + mY);
  }
}

function home()
{
  window.location = "index.html";
}
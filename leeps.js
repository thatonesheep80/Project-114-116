lX = 0;
lY = 0;

function takeSnap()
{
  save("Lips.png");  
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(leep, lX, lY, 80, 80);
}

function preload()
{
 leep = loadImage("https://i.postimg.cc/mrZ9TLDC/l-removebg-preview.png");
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
    lX = results[0].pose.nose.x - 40;
    lY = results[0].pose.nose.y - 10;
    console.log("lips' x =" + lX);
    console.log("lips' y =" + lY);
  }
}

function home()
{
  window.location = "index.html";
}
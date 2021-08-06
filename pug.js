img = "";
status = "";

function preload()
{
    img = loadImage ('Pug.jpeg');
}

function setup()
{
    canvas = createCanvas (600, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
   console.log("ModelLoaded")
   status = true;
}

function gotResult(error, results)
{
if(error) {
    console.log(error);
}
    console.log(results);
}
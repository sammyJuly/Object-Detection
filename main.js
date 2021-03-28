img="";


function preload(){
img=loadimage('modern-bed-designs-on-pinterest-500x500')
}

function draw (){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog", 45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
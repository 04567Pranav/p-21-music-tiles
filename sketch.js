var canvas;
var music;
var yellowbox,redbox,greenbox,orangebox
var ball
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
    yellowbox=createSprite(0,580,360,30)
    yellowbox.shapeColor="yellow"

    redbox=createSprite(295,580,200,30)
    redbox.shapeColor="red"

    greenbox=createSprite(515,580,200,30)
    greenbox.shapeColor="green"

    orangebox=createSprite(740,580,220,30)
    orangebox.shapeColor="orange"

    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor="white"
    ball.velocityX=4
    ball.velocityY=9

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
edges=createEdgeSprites()
ball.bounceOff(edges)
if(yellowbox.isTouching(ball) && ball.bounceOff(yellowbox)){
    ball.shapeColor="yellow"
    //music.stop()
    music.play()
}

if(redbox.isTouching(ball)){
    ball.shapeColor="red"
    ball.velocityX=0
    ball.velocityY=0
    music.stop()
}

if(greenbox.isTouching(ball) && ball.bounceOff(greenbox)){
    ball.shapeColor="green"
    //music.play()
}

if(orangebox.isTouching(ball) && ball.bounceOff(orangebox)){
    ball.shapeColor="orange"
    //music.play()
}


    //add condition to check if box touching surface and make it box
    drawSprites()
}

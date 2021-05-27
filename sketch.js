var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
//var backgroundImg

function preload(){
    // load sound here
    music=loadSound("music.mp3",true)
    //backgroundImg=loadAnimation("Bg.gif")
}


function setup(){
    //creating canvas
    canvas = createCanvas(800,600);

    //creating blocks
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "pink";

    block3 = createSprite(510,580,200,30)
    block3.shapeColor ="yellow";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor ="cyan"

   //creating ball
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=8;
    ball.velocityY=8;
}

function draw() {
    background("lightblue");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    //bounceOff
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
        music.play(music.mp3);
    }
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor="blue"
        music.play(music.mp3)
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor="green"
        music.play(music.mp3)
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor="black"
        music.play(music.mp3)
    }

    drawSprites()
    
        
        
    }

    

   


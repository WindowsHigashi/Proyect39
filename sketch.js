var backGround1;
var spaceShuttle,spaceShuttle1;
var holeImg;
var gameState=1;
var blackhole;
var hole;
let ground;
var bg_img;
var vy = 0;
var g = 0.5;
var aek;
var x=0;
var newPlayer;
var y=0;

function preload(){
  backGround1=loadImage("Space1.jpg");
  spaceShuttle=loadImage("Spaceshuttle.png");
  bg_img = loadImage("bg.png");
  blackhole = loadImage("blackHole.png");
};

function setup(){
  createCanvas(1500,700);
  frameRate(80);
  rectMode(CENTER);
  textSize(15);

  spaceShuttle1 = createSprite(250,550,30,100);
  spaceShuttle1.addImage(spaceShuttle);
  spaceShuttle1.setCollider("rectangle",0,0,150,455)
  spaceShuttle1.scale=0.5;
  spaceShuttle1.rotation=90;

  hole=createSprite(1260,370);
  hole.addImage(blackhole);
  hole.setCollider("rectangle",0,0,200,200)
  hole.scale=0.2;
  hole.rotation=-35;

  ground=createSprite(750,690,1500,10);
};

function draw(){
  background(backGround1);
  
//Lvl1
  if(gameState===1){

  if (keyIsDown(UP_ARROW)) {
    spaceShuttle1.position.y -= 10;
    
    
  }
  if (keyIsDown(DOWN_ARROW)) {
    spaceShuttle1.position.y += 10;
    
  }
  if (keyIsDown(LEFT_ARROW)) {
    spaceShuttle1.position.x -= 10;
    
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spaceShuttle1.position.x += 10;
    
    
   
  }
    
    if(spaceShuttle1.isTouching(hole)){
      gameState=2;
    }
  }


//Lvl2
if(gameState===2){
background(bg_img);
x+=1;
sc=round(x/10)

hole.destroy();


spaceShuttle1.position.x=750;
spaceShuttle1.position.y=100;
spaceShuttle1.rotation=0;

aek=round(vy);

text("Vertical Velocity: "+aek,800,75);
text("Click up arrow to prevent from crashing",200,75)
text("Score: "+sc,800,60);
//caida
vy +=g;
spaceShuttle1.position.y+=vy;

if(keyIsDown(UP_ARROW)){
  spaceShuttle1.position.y-=5;
  g-=0.0005
}


if(spaceShuttle1.isTouching(ground) && x<=1100){
alert("You lost :(")
spaceShuttle1.destroy();
ground.destroy();
gameState=3;
}

if(spaceShuttle1.isTouching(ground)&& x>1100){
alert("YOU WON :D");
spaceShuttle1.destroy();
ground.destroy();
gameState=4;
}
}

if(gameState===3){
background("black");
textSize(100);
text("You Lost",500,350);
text("Your score was "+sc,300,420);
}

if(gameState===4){
  background("black");
  textSize(100);
  text("You WON",500,350);
  text("Your score was "+sc,300,420);
  }

  drawSprites();
}


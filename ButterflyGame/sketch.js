var bg, bg_image
var butterfly, butterfly_image
var bricks, bricks_image
var orangeFlower, orangeFlower_image
var rose, rose_image
var yellowFlower, yellowFlower_image

function preload(){
  bg_image = loadImage("Background.jpeg");
  butterfly_image = loadImage("Butterfly.png")
  bricks_image = loadImage("Bricks.jpeg");
  orangeFlower_image = loadImage("OrangeFlower.png");
  rose_image = loadImage ("Rose.png");
  yellowFlower_image = loadImage("YellowFlower.png");
}
function setup(){
createCanvas(800,500);
bg = createSprite(400,250,800,500)
bg.addImage(bg_image);
bg.velocityX = -2;
butterfly = createSprite(100,250,100,100)
butterfly.addImage(butterfly_image);
butterfly.scale = 0.5;
}

function draw(){
background("skyblue")
if(bg.x<=300){
  bg.x = width/2
}
if(keyIsDown(UP_ARROW)){
  butterfly.position.y -= 5
}
if(keyIsDown(DOWN_ARROW)){
  butterfly.position.y += 5
}
spawnBricks();
spawnOrangeFlower();
spawnRose();
spawnYellowFlower();
drawSprites();
}

function spawnBricks(){
  if(frameCount%100 === 0){
    var brick = createSprite(400,-10, 100,100);
    brick.addImage(bricks_image);
    brick.scale = 0.1
    brick.velocityY = 2
    brick.velocityX = -2
    brick.x = Math.round(random(0,750));
    brick.y = Math.round(random(50,450));

  }
}

function spawnOrangeFlower(){
  if(frameCount%200 === 0) {
    orangeFlower = createSprite(400,200,100,100);
    orangeFlower.addImage(orangeFlower_image);
    orangeFlower.scale = 0.15
    orangeFlower.y = Math.round(random(20,600));
    orangeFlower.velocityX = -3;
  }
}

function spawnRose(){
  if(frameCount%250 === 0){
    rose = createSprite(600,200,100,100);
    rose.addImage(rose_image);
    rose.scale = 0.2
    rose.y = Math.round(random(20,600));
    rose.velocityX = -5;
  }
}

function spawnYellowFlower(){
  if(frameCount%300 === 0){
    yellowFlower = createSprite(600,200,100,100);
    yellowFlower.addImage(yellowFlower_image);
    yellowFlower.scale = 0.2
    yellowFlower.y = Math.round(random(20,600));
    yellowFlower.velocityX = -4;
  }
}
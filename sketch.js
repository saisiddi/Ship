var seaImg,shipImg,sea,ship,Running;
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
createCanvas(1000,400);
sea= createSprite(200,10,400,20);
sea.addImage(seaImg); 

ship= createSprite(200,200,20,50);
ship.addAnimation("Running",shipImg);
ship.scale=0.4;
sea.velocityX=-3;
}

function draw() {
  background("blue");
  if(sea.x < 0){
  sea.x = sea.width/2;
  } 
 drawSprites();
}
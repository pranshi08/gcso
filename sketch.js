var car,wall;
var speed,weight;

function setup() {

  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

 car=createSprite(50, 200, 50, 50);
 car.velocityX=speed;
 car.shapeColor= "white";

 wall=createSprite(1500,200,50,height/2);
 wall.shapeColor="grey";
}
function draw() {
  background(0);  
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}
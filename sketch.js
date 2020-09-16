var bullet,wall; 
var weight, speed;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1400,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  speed=random(90,55);
  weight=random(400,1500);
  bullet.velocityX = speed;
}

function draw() {
  background(0);  

if(hasCollided(bullet,wall)) 
{
bullet.velocityX = 0;
var damage=0.5 * weight * speed* speed/(thicness *thickness *thickness)
if (damage>10) {
  wall.shapeColor=color(255,0,0);
}


if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}







  drawSprites();
}

function hasCollided(abullet,awall) {
  bulletRightEdge=abullet.x=abullet.width;
  wallLeftEdge=awall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
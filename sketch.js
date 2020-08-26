var wall,thickness;

var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  

  speed = random(223,321);
  weight = random(30,52);
  thickness  = random(22,83);
  bullet = createSprite(400,300,20,20);
  bullet.shapeColor = "black";
  bullet.velocityX = speed;
wall = createSprite(1200,200,thickness,80);
wall.shapeColor = "red";

}

function draw()
{
  background("pink");
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness);

  if(damage>10){
    wall.shapeColor = "blue";

  }
  if(damage<10){
    wall.shapeColor = "green";
  }
}

  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
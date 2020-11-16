var movingRect;
var fixedRect;
function setup() {
  createCanvas(800,400);
fixedRect =  createSprite(400, 200, 50, 50);
movingRect = createSprite(600,200,50,50);
fixedRect.debug = false;
movingRect.debug = false;
}

function draw() {
  background(255,255,255);  
  movingRect.x =mouseX;
  movingRect.y =mouseY;
  fixedRect.shapeColor = 'red';
  movingRect.shapeColor = 'red';
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 ){
   movingRect.shapeColor = 'green';
   fixedRect.shapeColor = 'green';
  }
  
  drawSprites();
}
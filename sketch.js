var movingRect,firxedRect;



function setup() {
createCanvas(800,400);
  
  movingRect = createSprite(400, 100, 30, 30);
  fixedRect = createSprite(400, 350, 50, 50);
  movingRect.velocityY = +2;
  fixedRect.velocityY = -2;
}

function draw() {
  background(255,255,255); 

  edges = createEdgeSprites();
  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);
  
 // movingRect.y = mouseY;
 // movingRect.x = mouseX;
 
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

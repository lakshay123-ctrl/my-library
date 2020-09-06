
var fr,mr,r1,r2,r4,r5;

function setup() {
  createCanvas(800,800);
 fr =  createSprite(400, 200, 50, 50);
 mr =  createSprite(400,150,40, 60);
 r1 =  createSprite(300,50, 50, 50);
 r1.velocityY = 5;
 r2 =  createSprite(300,300,40, 60);
 r2.velocityY = -5;
 r4 =  createSprite(400,300,40, 60);
 r5 =  createSprite(300,200,40, 60);
 r5.shapeColor = "blue";
 r5.velocityY = -4;
 r4.shapeColor = "brown";
 mr.shapeColor = "red";
 fr.shapeColor = "green";
 r1.shapeColor = "blue";
 fr.debug = true;
 mr.debug = true;
}

function draw() {
  background(0,0,0);  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  
  
  bounceOff(r1,r2);
  bounceOff(r5,r2);

  if (isTouching(mr,fr)){
    mr.shapeColor = "blue";
    fr.shapeColor = "yellow";
  }

  else {
    mr.shapeColor = "red";
 fr.shapeColor = "green";
  }

 if (isTouching(r4,mr)){
   text ("you won",400,400);
   
 }





  drawSprites();
}



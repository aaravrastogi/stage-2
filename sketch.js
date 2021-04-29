var r1,r2,r3,r4;


function setup() {
  createCanvas(800,400);
 r1= createSprite(400,200,30,50);
 r1.shapeColor="red";
r2=createSprite(400,200,50,30)
r2.shapeColor="green"
r3=createSprite(250,100,80,60)
r3.shapeColor="pink"
r4=createSprite(500,180,30,40)
r4.shapeColor="purple"
}

function draw() {
  background(255,255,255); 
  r2.x=World.mouseX;
  r2.y=World.mouseY;
  
  if(touching(r1,r2)){
    r1.shapeColor="blue"
    r2.shapeColor="yellow"
  }

  else if(touching (r2,r3)){
    r2.shapeColor="yellow"
    r3.shapeColor="lightgreen"

  }
else if(touching (r2,r4)){
    r2.shapeColor="yellow"
    r4.shapeColor="lightblue"
     
}
else{
  r1.shapeColor="red"
  r2.shapeColor="green"
  r3.shapeColor="pink"
  r4.shapeColor="purple"
}

  drawSprites();
}


























var movingRect, fixedRect

function setup() {
  createCanvas(600,600);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(100,100,50,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  object1=createSprite(100,100,50,50);
  object2=createSprite(100,200,50,50);
  object3=createSprite(100,300,50,50);
  object4=createSprite(100,400,50,50);
  object1.shapeColor="blue";
  object2.shapeColor="blue";
  object3.shapeColor="blue";
  object4.shapeColor="blue";
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  //console.log(movingRect.x-fixedRect.x);
  //console.log(movingRect.width/2+fixedRect.width/2);
  if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  if(isTouching(movingRect,object4 )){
    object4.shapeColor="red";
    movingRect.shapeColor="red";
  }else{
    object4.shapeColor="blue";
    movingRect.shapeColor="green";
  }

   
  drawSprites();
}
function isTouching(ob1,ob2){
  if (ob1.x-ob2.x<=ob1.width/2+ob2.width/2
    && ob2.x-ob1.x<=ob1.width/2+ob2.width/2
    && ob1.y-ob2.y<=ob1.height/2+ob2.height/2
    && ob2.y-ob1.y<=ob1.height/2+ob2.height/2
    ){
      return true;
   }else{
      return false;

   }

}
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1800,400);
  //createSprite(400, 200, 50, 50);

  speed=random(55,70);
  weight=random(400,700);

  car=createSprite(50,200,50,50);

  wall=createSprite(1000,200,60,height/2);
  wall.shapeColor=color(80,80,80);

  car.velocityX=speed;

}

function draw() {
  background(0);  
  drawSprites();

if(wall.x-car.x<(car.width+wall.width)/2){
  //car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car.shapeColor="red";
  }

  if(deformation<180 && deformation>100){
    car.shapeColor="yellow";
  }

  if(deformation<100){
    car.shapeColor="brown";
   }
  }
}
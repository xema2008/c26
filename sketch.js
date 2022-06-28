const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImage;
var tower;
var towerImage;
var angle;
var cannon;
var cannonBall;
var balls=[];


function preload() {
 backgroundImage=loadImage("./assets/background.gif");
 towerImage=loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle=15;
  cannon=new Cannon(180,110,130,100,angle);
  cannonBall=new CannonBall(cannon.x,cannon.y);
  var options={
    isStatic:true
  }
  
  ground=Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,ground);

  tower=Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);
  
 
}

function draw() {
  background(189);
  image(backgroundImage,0,0,1200,600);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1);

  cannon.display();
  cannonBall.display();
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x,tower.position.y,160,310); 
  pop();


}

  function keyReleased(){
    if(keyCode===DOWN_ARROW){
      balls[balls.length-1].shoot();

    }

  }

  function keyPressed(){
    if(keyCode===DOWN_ARROW){
      var cannonBall=new CannonBall(cannon.x,cannon.y);
      balls.push(cannonBall);
      
    }
  }

  function showCannonBalls(ball,i){
    if(ball){
      ball.display();
    }
    for(var i=0;i<ball.length;i++){
      showCannonBalls(balls[i],i);
      
    }
  }
 
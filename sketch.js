const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400,height,800,30);
  paper = new Paper(100, 100, 25)
  dustbinB = new Dustbin(588,678,160,15);
  dustbinL = new Dustbin(500,605,15,160);
  dustbinR = new Dustbin(660,605,15,160);

  Engine.run(engine);
  keyPressed();
}
 
 

function draw() {  
  Engine.update(engine);
  background(0);
  ground.display();
  dustbinL.display();
  dustbinB.display();
  dustbinR.display();
  paper.display();
}
// maam it is showing some errors in console
//dustbin.js,line15

function keyPressed(){
  if (keyCode === UP_ARROW){
    Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}



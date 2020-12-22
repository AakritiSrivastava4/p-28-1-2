const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,side0,side1,side2;
var connect;
function preload(){
 dustbin = loadImage("dustbingreen.png")
}

function setup() {
  createCanvas(800, 700);
 
 
  engine = Engine.create();
  world = engine.world;

  paper = new Paper(100, 600, 10);

    ground = new Ground(400, 680, 800, 20);
 
  side0 = new Dustbin(550, 620, 20, 100);
    side1 = new Dustbin(635, 660, 150, 20);
    side2 = new Dustbin(720, 620, 20, 100);

connect = new Constraint(paper.body,{x:100,y:200})
    Engine.run(engine);
 
}


function draw() {

 rectMode(CENTER);
 background(250);



 paper.display();

 ground.display();
connect.display();
 side0.display();
 side1.display();
 side2.display();
image (dustbin,530,480,250,200)
 drawSprites();

}

function keyPressed(){
 if(keyCode === UP_ARROW)  {
    Matter.Body.applyForce(paper.body, paper.body.position, 
      {x:15, y: -15})
 }
}

function mouseDragged (){
  Matter.Body.setPosition (paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased (){
  connect.fly ()
}
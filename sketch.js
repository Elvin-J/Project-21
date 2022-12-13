
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var up1
var up2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,390,400,20)
	up1 = new Ground(390,150,20,30)
	up2 = new Ground(360,150,20,30)

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		densitty:1.2
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50);


  ellipse(ball.position.x,ball.position.y,20);

  ground.show()
  up1.show()
  up2.show()
  Engine.update(engine);
  

  function hForce()
  {
	Matter.body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }

  function vForce()
  {
	Matter.body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  }





  drawSprites();
 
}




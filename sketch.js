const Engine = Matter.Engine;
const World = Matter. World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
	engine = Engine.create();
	world=engine.world;
  createCanvas(400,400);
  var options={
	  isStatic:true
  }
  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, ground);
 // console.log(object);

 var ball_options={
	 restitution:0.5
 }

 ball = Bodies.circle(200, 100, 30, ball_options);
 World.add(world, ball);
  
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);
 
}

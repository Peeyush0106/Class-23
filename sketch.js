const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine, box, box2;
var ground;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  box = new Box(320, 100, 50, 100);
  box2 = new Box(300, 200, 50, 30);
  ground = new Ground(400, 390, 800, 20);

  // var ball_options = {
  //   restitution: 0.8
  // }
  // ball = Bodies.circle(200, 200, 40, ball_options);
  // var ground_options = {
  //   isStatic: true
  // }
  // ground = Bodies.rectangle(400, 380, 800, 20, ground_options);
  // World.add(world, ground);
  // World.add(world, ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  // rectMode(CENTER);
  // rect(ground.position.x, ground.position.y, 800, 20);
  // ellipseMode(RADIUS);
  // ellipse(ball.position.x, ball.position.y, 40);
  box.display();
  box2.display();
  ground.display();
}
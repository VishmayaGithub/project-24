
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,b1,b2,b3
function preload()
{
	//bg = loadImage("house.jpg")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(600,500,2000,10)
	//ground1 = createSprite(600,600,1200,10)
	World.add(world,ground)

	ball = new Paper(100,470,15)
	b1 = new Box(900,490,200,20)
	b2 = new Box(810,430,20,100)
	b3 = new Box(990,430,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
 // rect(ground.position.x,ground.position.y,800,10)
  background("gray");
  keyPressed()
  ball.display()
  b1.display()
  b2.display()
  b3.display()
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyDown("UP")){
		Matter.Body.applyForce(ball.body,ball.body.position,{x : 17,y : -35})
	}
	if(keyDown("DOWN")){
		Matter.Body.applyForce(ball.body,ball.body.position,{x : -100,y : 55})
	}
}




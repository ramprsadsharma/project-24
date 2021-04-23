
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
    }
	ground= Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);


	var ball_options ={
		restitution: 1.0
	 }
 
	ball= Bodies.rectangle(200,100,20,20,ball_options);
	 World.add(world,ball); 
   

	//Create the Bodies Here.

    leftSide=new Dustbin(550,620,20,100);
    bottom=new Dustbin(610,660,100,20);
    rightSide=new Dustbin(670,620,20,100);
     
	ground = new Ground(400,680,800,20);
    Paper = new Paper(100,610);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(ground.position.x,ground.position.y,400,20);

  rect(ball.position.x,ball.position.y,20,20);

 leftSide.display();
 bottom.display();
 rightSide.display();
  ground.display();
  Paper.display();

  drawSprites();
 
}

function keyPressed() {
   if(keyCode===up_Arrow){

  matter.Body.applyForce(PaperObject.Body.PaperObject.Body.position,{x:85,y:-85})

}
}


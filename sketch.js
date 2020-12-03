
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	boyImg = loadImage("Img/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground1 = new Ground(10,680,1600,10)
	 rock1 = new Rock(137,580,10,10)
	 rop = new SlingShot(rock1.body,{x:137,y:580})
	boy1 = new Boy(200,635,1,1)

	boy2= new Tree(650,542,1,1)

	boy3= new Mango(730,522,30)
	boy4= new Mango(630,522,30)
	boy5= new Mango(700,522,30)
	boy6= new Mango(650,432,30)
	boy7= new Mango(560,542,30)
	boy8= new Mango(770,542,30)
	boy9= new Mango(730,452,30)
	boy10= new Mango(560,512,30)
	boy11= new Mango(590,542,30)
	boy12= new Mango(700,490,30)
	boy13= new Mango(730,512,30)
	boy14= new Mango(691,452,30)
	boy15= new Mango(770,500,30)
	boy16= new Mango(770,542,30)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ground1.display()
  boy1.display()
  boy2.display()

  boy3.display()
  boy4.display()
  boy5.display()
  boy6.display()
  boy7.display()
  boy8.display()
  boy9.display()
  boy10.display()
  boy11.display()
  boy12.display()
  boy13.display()
  boy14.display()
  boy15.display()
  boy16.display()
  rock1.display()
  rop.display()
}
  function detectollision(rock1,boy3){
	  boy3.body.position=boy3.body.position
	rock1.body.position = rock1.body.position
	var distance = dist(rock1.body.position.x,rock1.body.position.y,boy3.body.position.x,boy3.body.position.y)
	if(distance<=boy3.r,)
Matter.Body.setStatic(boy3.body,false)
  }
  function detectollision(rock1,boy4){
	Matter.Body.setStatic(boy4.body,false)
  }
  function detectollision(rock1,boy5){
	Matter.Body.setStatic(boy5.body,false)
  }
  function detectollision(rock1,boy6){
	Matter.Body.setStatic(boy6.body,false)
  }
  function detectollision(rock1,boy7){
	Matter.Body.setStatic(boy7.body,false)
  }
  function detectollision(rock1,boy8){
	Matter.Body.setStatic(boy8.body,false)
  }
  function detectollision(rock1,boy9){
	Matter.Body.setStatic(boy9.body,false)
  }
  function detectollision(rock1,boy10){
	Matter.Body.setStatic(boy10.body,false)
  }
  function detectollision(rock1,boy11){
	Matter.Body.setStatic(boy11.body,false)
  }
  function detectollision(rock1,boy12){
	Matter.Body.setStatic(boy12.body,false)
  }
  function detectollision(rock1,boy13){
	Matter.Body.setStatic(boy13.body,false)
  }
  function detectollision(rock1,boy14){
	Matter.Body.setStatic(boy14.body,false)
  }
  function detectollision(rock1,boy15){
	Matter.Body.setStatic(boy15.body,false)
  }
  function detectollision(rock1,boy16){
	Matter.Body.setStatic(boy16.body,false)
  }
  
  


 

function mouseDragged(){
	
		Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
		console.log("In")
  }
  
  
  function mouseReleased(){
	rop.fly();
	
  }




var roof,obj1,ob2,obj3,obj4,obj5;
var r1,r2,r3,r4,r5;
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

	roof = new Roof(400,100,400,20);
	obj1 = new Bob(320,500,20);
	obj2 = new Bob(360,500,20);
	obj3 = new Bob(400,500,20);
	obj4 = new Bob(440,500,20);
	obj5 = new Bob(480,500,20);

	r1 = new Rope(obj1.body,roof.body,-80);
	r2 = new Rope(obj2.body,roof.body,-40);
	r3 = new Rope(obj3.body,roof.body,0);
	r4 = new Rope(obj4.body,roof.body,40);
	r5 = new Rope(obj5.body,roof.body,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  obj5.display();
  obj4.display();
  obj3.display();
  obj2.display();
  obj1.display();
  roof.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
	
  drawSprites();
}
function keyPressed(){
if(keyCode===32){
	Matter.Body.applyForce(obj5.body,obj5.body.position,{x:100,y:-150});
}
}



var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wall1,wall2 , wall3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	boxposition=width/2 
	boxy=610
	leftsSprite=createSprite(boxposition-100,boxy,20,100);
	leftsSprite.shapeColor="red"
	leftbody=Bodies.rectangle(boxposition-100-20,boxy,20,100,{isStatic:true})
	World.add(world,leftbody)

	rightSprite=createSprite(boxposition+100,boxy,20,100);
	rightSprite.shapeColor="red"
	rightbody=Bodies.rectangle(boxposition+100-20,boxy,20,100,{isStatic:true})
	World.add(world,rightbody)

	baseSprite=createSprite(boxposition,boxy+40,200,20);
	baseSprite.shapeColor="red"
	basebody=Bodies.rectangle(boxposition,boxy+40-20,200,20,{isStatic:true})
	World.add(world,basebody)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody,false);
    
  }
}




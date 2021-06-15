const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,brick,plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,500,1200,20)
    hammer = new Hammer(10,100);
    brick= new Brick(700,475,70,50)


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    hammer.x=mouseX;
    hammer.y=mouseY;

    plane.display();
    hammer.display();
    brick.display();
    

    
 
}
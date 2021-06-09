const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hexagon;

function preload() {
   
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    hexagon = new Hexagon(200,200,50,50);
    
   
}

function draw(){
    background("black");
    //drawSprites;

    hexagon.display();
}

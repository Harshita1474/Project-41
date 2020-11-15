const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var maxDrops=100;
var drops=[];

function preload(){
    
}

function setup(){
   createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;

   for(var i=0; i<maxDrops; i++){
       drops.push(new createDrop(random(0,400), random(0,400)));
   }
    
}

function draw(){
    background(0);
    Engine.update(engine);
    drops.reposition();
    drops.display();
}   


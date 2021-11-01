const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg;

var maxSnow=100;
var snow=[];
var rand;

function preload(){
bg=loadImage("snow1.jpg");
}

function setup(){
    engine=Engine.create();
    world=engine.world;
    createCanvas(800,400);
    

}

function draw(){
Engine.update(engine);
background(bg); 

if(frameCount%8===2) {
    snow.push(new Snow(random(0, 800), 30, 30))
    
  }
  for(var j = 0; j<snow.length; j++) {
    snow[j].display()
    
  }

drawSprites();
}   


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles=[];
var divisions=[];
var plinkos=[];
var ground;
var divisionHeight=300;
function preload(){

}

function setup(){
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-5,width,15);

  for(var j = 15; j <=width-10; j = j+ 50){
    plinkos.push(new Plinko (j,400));
    plinkos.push(new Plinko (j,200));
  }
 
  for(var j = 40; j <=width; j = j+ 50){
    plinkos.push(new Plinko (j,100));
    plinkos.push(new Plinko (j,300));
  }

if(frameCount%60===0){
 particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
  
  for(var k = 0; k <=width; k = k+ 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
}
function draw(){
 background("black");
 Engine.update(engine);
  
 ground.display();
 for(var j = 0 ; j < plinkos.length; j++){
  plinkos[j].display();

 }
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
 }
 for(var j = 0 ; j < particles.length; j++){
  particles[j].display();

 }

 for(var k = 0 ; k < divisions.length; k++){
  divisions[k].display();
 }
}

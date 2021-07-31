var path, person;
var backgroundImg, person_running;
var edges;

function preload(){
  //pre-load images
backgroundImg = loadAnimation("path.png")
person_running = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(600,600);
  background(30);
  //create sprites here
  path = createSprite(300,300);
  path.addAnimation("path",backgroundImg);
  path.velocityY = 4;
  path.scale = 1.1;
  person = createSprite(300,300);
  person.addAnimation("running",person_running);
  person.scale = 0.1;
  edges = createEdgeSprites();
}

function draw() {
  background(0);
  if(path.y > 500){
    path.y = 300;
  }
  if(keyIsDown(RIGHT_ARROW)){
    person.x = person.x + 2;
  }
  if(keyIsDown(LEFT_ARROW)){
    person.x = person.x + -2;
  }
  
  person.bounceOff(edges[0]);
  person.bounceOff(edges[1]);
  person.collide(edges[3]);
  drawSprites();
}


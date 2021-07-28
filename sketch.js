function preload(){
  //pre-load images
backgroundImg = loadAnimation("path.png")
person_running = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(600,600);
  background(30);
  //create sprites here
  var path = createSprite(300,300);
  path.addAnimation("path",backgroundImg);
  path.velocityY = 4;
  path.scale = 1.1;
  var person = createSprite(300,300);
  person.addAnimation("running",person_running);
  person.scale = 0.1;
}

function draw() {
  background(0);
  drawSprites();
}

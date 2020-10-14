var climber;
var doos;
var spooky;

var ghost1,ghost2;

var ghtower;

var gameover;

var PLAY = 1;
var END = 0;

var gameState=PLAY;

var doorGroup;
function preload(){
  climber = loadImage("climber.png");
  door = loadImage("door.png");
  spooky = loadSound("spooky.wav");
 ghtower = loadImage("tower.png");
  ghost1 = loadImage("ghost-jumping.png");
ghost2 = loadImage("ghost-standing.png")
  
  gameover=loadImage("hh.jfif");

}
function setup(){
  createCanvas(windowWidth,windowHeight);
  
 tower = createSprite(width/2,height/2);
tower.addImage("towe",ghtower);
  tower.velocityY= 3
  tower.scale = 1.4
  
ghost = createSprite(300,300);
  ghost.addImage("ghos",ghost1)
  ghost.scale=0.3
  
  
   doosGroup = createGroup();
}
function draw(){
  
  background(0);
  
    
    if (gameState === PLAY){
      
      if (tower.y > 600){
    tower.y= 300;
      //   tower.addSound("spooky1",spooky);
          }
if (keyDown("up")){
  ghost.velocityY = -12; 
  ghost.changeAnimation("gho",ghost2)
}
      if (keyDown("left")){
       ghost.velocityX = -7;
      }
      if (keyDown("right")){
         ghost.velocityX = 7;
        
      }
      
      
      ghost.velocityY =ghost.velocityY + 0.8
      
     
    if(doosGroup.isTouching(ghost)){
       gameState = END;
    
    }
      
    }
  
  spawndoor();


 if (gameState === END) {
     
      tower.velocityY = 0;
      ghost.velocityY = 0;
    ghost.velocityX = 0;
     
     doosGroup.setVelocityYEach(0);

    doosGroup.setLifetimeEach(-1)
   }
  
  
  
  drawSprites();
}
function spawndoor(){
 if (frameCount % 200 === 0){
   var doors = createSprite(400,height-600,10,40);
doors.velocityY= 3;
   
    //generate random obstacles
    doors.x= Math.round(random(100,500));
           doors.addImage(door);
          
    
    
   
    //assign scale and lifetime to the obstacle           
    doors.scale = 1;
    doors.lifetime = 600;
   
   //add each obstacle to the group
    doosGroup.add(doors);
 }
}
var PLAY=1
var gameState=PLAY;
var END=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.2
  
  ground=createSprite(400,380,100000,20)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  FruitGroup=createGroup()
  obstacleGroup=createGroup()
}


function draw() {
background("lightgreen")
  

   textSize(20)
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
text("SurvivalTime: "+survivalTime,100,50)
  
   spawnobstacle()
  spawnFood()
  
if(gameState===PLAY){

  monkey.collide(ground)
  if(keyDown("space")&&monkey.y>=139){
       monkey.velocityY=-12
    
    }
  
   if(obstacleGroup.isTouching(monkey)&& monkey.y >=100){
       gameState =END
       }
  
    monkey.velocityY=monkey.velocityY+0.8
    
}
  
  if(gameState===END){
    
    monkey.velocity=0;
    
    
    obstacleGroup.setVelocityXEach(0);
     FruitGroup.setVelocityXEach(0);    
   
  }
    

    
  drawSprites()
}
 
function spawnobstacle(){
 
  if(frameCount %60===0){
    obstacle=Math.round(random(600,50))
     obstacle=createSprite(400,340,20,20);
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-3;
    obstacleGroup.add(obstacle)
    
     }
}
  
  function spawnFood(){
    
    if(frameCount %60===0){
    banana=Math.round(random(200,100))
   banana =createSprite(300,200,20,20);
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3;
      FruitGroup.add(banana)
  }
  
  
}
  
  
  
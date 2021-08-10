var ground
var x
var gameState = "start"
var rocket1
var rocket2
var player
var edges
var obstacle1 , obstacle2 , obstacle3

function preload (){
    ground = loadImage("space0.png")
    rocket1 = loadImage("space4.png")
    rocket2 = loadImage("space5.png")
    rocket3 = loadImage("space6.png")
    obstacle1 = loadImage("space1.png")
    obstacle2 = loadImage("space2.png")
    obstacle3 = loadImage("space3.png")
}

function setup () {
    createCanvas (displayWidth,displayHeight)
    x = createSprite(displayWidth/2,displayHeight/2
        ,displayWidth,displayHeight-200)
    x.scale=2.7
    x.addImage(ground)
    player=createSprite(displayWidth/2,displayHeight-200)
    player.visible=false
    player.addImage(rocket3)
    edges=createEdgeSprites()
    obstaclesGroup=createGroup()
}

function draw (){
    drawSprites()
    if (gameState==="start"){
        fill("white")
        textSize(20)
        text("A  spaceship is lost in the space so we hve to rescue it by launching a rocket. ",displayWidth/2-300,150)
        text("Press space escape from Solar Strom",displayWidth/2-200,250)
    }
    if(gameState==="start" && keyDown("space")){
        gameState="play"

    }
    if(gameState==="play"){
        player.visible=true
        player.scale=0.5
      if(keyDown("right")){player.x=player.x+22
            player.scale=0.5
              player.addImage(rocket2)} 
             
              if(keyDown("left")){player.x=player.x-22
                player.scale=0.5
                  player.addImage(rocket1)}

                  if(keyDown("up")){
                    player.scale=0.5
                      player.addImage(rocket3)}
                    
          player.collide(edges)  
          spawnObstacles()          
    }
}
function spawnObstacles() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(random(400,displayWidth-400),100,10,40);
      //obstacle.debug = true;
      obstacle.velocityY = 3
      
      //generate random obstacles
      var rand = Math.round(random(1,3));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        case 3: obstacle.addImage(obstacle3);
                break;
              default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.5;
      obstacle.lifetime = 300;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }
  
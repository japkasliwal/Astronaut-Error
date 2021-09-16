var backgroundImg, backgroundSprite
var astronautImg, astronautSprite
var bathImg, drinkImg, eatImg, gymImg,



function preload(){
  backgroundImg = loadImage("iss.png")
  astronautImg = loadImage("move.png")
  bathImg = loadImage("bath1.png")
  drinkImg = loadImage("drink1.png")
  eatImg = loadImage("eat1.png")
  gymImg = loadImage("gym1.png")

}

function setup() {
  createCanvas(800,400);
 backgroundSprite = createSprite(200,200)
 backgroundSprite.addImage("Bg",backgroundImg)
backgroundSprite.scale=0.2

astronautSprite = createSprite(200,200)
astronautSprite.addImage("Human",astronautImg)
astronautSprite.scale=0.1
}

function draw() {
  background(255,255,255);  
  drawSprites();
if(keyDown("RIGHT_ARROW")){


}

}
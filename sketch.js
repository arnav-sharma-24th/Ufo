var start;
var button;
var PLAY=1
var END=0;
var gameState=PLAY
var score
var backround,back;
var player,playerImage;
var good,gree;
var badGroup,bad;
var laser,re
var score =0;
function preload(){

playerImage=loadImage("me.png");
gree = loadImage("Friend.png");
bad = loadImage("Enemy.png");
re=loadImage("laser.png");
greeGroup = new Group();
badGroup = new Group();
backround = loadImage("back12.png")
}

function setup() {
  createCanvas(1200,600);
  //THIS IS PLAYER
  player = createSprite(100,100,20,20);
  player.addImage(playerImage);
  player.scale = 0.3;

 laser = createSprite(450,110,20,20);
 laser.addImage(re);
 laser.scale = 0.3;
}

function draw() {
  background(backround);  
  if(gameState===PLAY){
  player.y=mouseY;
 laser.visible = false;
 laser.y = player.y;
 stroke("white")
 text("score:"+score,1000,20);
 spawngree();
 spawnred();
 if(keyDown("space")){
  laser.velocityX = 50;
  laser.visible = true;
   
 if(laser.x>1200){
   laser.x = 450
   laser.velocityX = 0;
 }}
 if(laser.isTouching(badGroup)){
score++
laser.x = 450;
badGroup.destroyEach();
   }
 else if(laser.isTouching(greeGroup)){
gameState = END;
greeGroup.destroyEach();
 }
  }
  if(gameState === END){
    stroke(0,0,0);
    textSize(30);
    text("you lose",200,200)
  }
  drawSprites();
}

function spawngree(){
  if (frameCount % 100 === 0){
    var Friend = createSprite(1200,Math.round(random(100,600)),50,50)
    Friend.addImage(gree);
    Friend.scale=0.2;
    Friend.velocityX=-(6 + score/100);
    Friend.setCollider("rectangle",0,0,30,30);
    greeGroup.add(Friend);
   
 
  }
 }
 function spawnred(){
  if (frameCount % 80 === 0){
    var enemy = createSprite(1200,Math.round(random(100,600)),50,50)
    enemy.addImage(bad);
    enemy.scale=0.2;
    enemy.velocityX=-(6 + score/100);
  enemy.setCollider("rectangle",0,0,30,30);
    badGroup.add(enemy);
   
 
  }
 }
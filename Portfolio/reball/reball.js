var ballx = 300;
var bally = 300;
var ballSize = 100;
var score =0;
// Ashley 
var ashleyx = 100;
var ashleyy = 100;
var ashleySize = 90;
//Goth Ashley
var gothx = 100;
var gothy = 100;
var gothSize = 120;
//Armored Ashley
var armorx = 100;
var armory = 100;
var armorSize = 130;
//images
var gameState= "intro";
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img= loadImage('https://vivwalnuts.github.io/images/re4intro2.png');
 img2 = loadImage('https://vivwalnuts.github.io/images/re4bg.png');
img3= loadImage('https://vivwalnuts.github.io/images/ganado1.png');
img4= loadImage('https://vivwalnuts.github.io/images/plaga.png');
img5= loadImage('https://vivwalnuts.github.io/images/armadura.png');
img6= loadImage('https://vivwalnuts.github.io/images/leonbg.png');
img7= loadImage('https://vivwalnuts.github.io/images/fishfarm.png');
img8= loadImage('https://vivwalnuts.github.io/images/castle.png');
img9= loadImage('https://vivwalnuts.github.io/images/ashley.png');
img10= loadImage('https://vivwalnuts.github.io/images/gothashley.png');
img11= loadImage('https://vivwalnuts.github.io/images/armorashley.png');
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  background(img);
  
} // end setup


function draw() {
  background(img);
  if (gameState=="intro"){
  levelIntro();
  }
  
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  // "you won"
    if (gameState=="win"){
   levelWin(); 
  }
  
  if (gameState!="intro"){
  text(("Score: " + score), width/2, 40);
  }

} // end draw

function levelIntro() {
  fill(255);
  text("Take out 50 infected villagers!", width/2, 60);
    text("make sure to not hit Ashley or else you will lose points.", width/2, 300);
    if (keyIsPressed === true) {
    gameState="L1";
  }
  
}

function levelOne(){
  background(img2);
  fill(255);
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
    // move ashley as well
    ashleyx = random(width);
    ashleyy = random(height);
  }
  var distToAshley = dist(ashleyx, ashleyy, mouseX, mouseY);
if (distToAshley <ashleySize/2){
  ashleyx = random(width);
  ashleyy = random(height);
  score = max(0, score - 1);
}
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }


  //ellipse(ballx, bally, ballSize, ballSize);
  image(img3, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  image(img9, ashleyx-ashleySize/2, ashleyy-ashleySize/2, ashleySize, ashleySize);
  
} // end level one

function levelTwo(){
  background(img7);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
        // move goth ashley as well
    gothx = random(width);
    gothy = random(height);
  }
    var distToGoth = dist(gothx, gothy, mouseX, mouseY);
if (distToGoth <gothSize/2){
  gothx = random(width);
  gothy = random(height);
  score = max(0, score - 3);
}
  if(score>25){
// lvel 3
   gameState = "L3";
  }
//  line(ballx, bally, mouseX, mouseY);
//  ellipse(ballx, bally, ballSize, ballSize);
    image(img4, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
    image(img10,gothx-gothSize/2, gothy-gothSize/2, gothSize, gothSize);
} // end level two

function levelThree(){
    background(img8);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
            // move armor ashley as well
    armorx = random(width);
    armory = random(height);
  }
     var distToArmor = dist(armorx, armory, mouseX, mouseY);
if (distToArmor <armorSize/2){
  armorx = random(width);
  armory = random(height);
  score = max(0, score - 5);
}
  if(score>49){
//you have won
gameState = "win";
// level 4
//   gameState = "L4";
  }
  
//  line(ballx, bally, mouseX, mouseY);
 // ellipse(ballx, bally, ballSize, ballSize);
    image(img5, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
    image(img11, armorx-armorSize/2, armory-armorSize/2, armorSize, armorSize);
} // end level three

function levelWin(){
  fill(255);
  background(img6);
  text("Congrats you took out 50 infected villagers and saved Ashley!", width/2, height-20);
   

  }

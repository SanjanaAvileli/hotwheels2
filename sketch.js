var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car2, car3, car4;
var image1,image2,image3,image4;
var track, ground,bg;
var cars = [];


function preload(){

image1 = loadImage("car1.png");
image2 = loadImage("car2.png");
image3 = loadImage("car3.png");
image4 = loadImage("car4.png");
track = loadImage("track.jpg");
ground = loadImage("ground.png");

bg = loadImage("Background.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

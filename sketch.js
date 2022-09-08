/*const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;*/
var mundo1;
var pisoinvisible;
var fondoinicio;
var mundo2;
var mundo3;
var mundo4;
var mundo5;


function preload(){
mundo1=loadImage("mundo1.jpg");




}
function setup(){
createCanvas(windowWidth,windowHeight);
fondoinicio= createSprite(windowWidth/2,widowHeight/2,windowWidth,widowHeight);
fondoinicio.addImage(mundo1);
pisoinvisible=createSprite(windowWidth/2,widowHeight-25,windowWidth,20);
pisoinvisible.visible=false;

}

function Draw(){
background("black")
drawSprites();

}

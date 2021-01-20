const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImg;
var ground1;
var box1;
var box2;
var box3, box5, box4, box6, box7;
var ball;
var chain1;

function preload(){
    bgImg = loadImage("bg.PNG");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,490,1200,20);
    box1 = new Box(920,450,90,90);
    box2 = new Box(920,400,90,90);
    box3 = new Box(920,350,90,90);
    box4 = new Box(825,450,90,90);
    box5 = new Box(825,400,90,90);
    box6 = new Box(825,350,90,90);
    box7 = new triangle(873,300,200,70);
    ball = new Bird(200,200,80,80);
    
    
    chain1 = new chain(ball.body,{x:500, y:0});
   
    }
function draw(){   
    background(bgImg);

        Engine.update(engine);
        ground1.display();
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        ball.display();
        chain1.display();
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})


}

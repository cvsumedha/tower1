const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world , engine
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var ba,bb,bc,bd,be,bf,bg,bh,bi;
var pg;
var rope;
var g,g2;
var gameState = "onrope";

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    pg= new polygon(100,100,50,50);

    b1= new box(600,500,30,30)
    b2= new box(630,500,30,30)
    b3= new box(660,500,30,30)
    b4= new box(690,500,30,30)
    b5= new box(720,500,30,30)
    b6= new box(750,500,30,30)
    b7= new box(780,500,30,30)
    b8= new box(630,470,30,30)
    b9= new box(660,470,30,30)
    b10= new box(690,470,30,30)
    b11= new box(720,470,30,30)
    b12= new box(750,470,30,30)
    b13= new box(660,440,30,30)
    b14= new box(690,440,30,30)
    b15= new box(720,440,30,30)
    b16= new box(690,410,30,30)

    ba= new box(1000,200,30,30)
    bb= new box(1030,200,30,30) 
    bc= new box(1060,200,30,30) 
    bd= new box(1090,200,30,30) 
    be= new box(1120,200,30,30) 
    bf= new box(1030,170,30,30) 
    bg= new box(1060,170,30,30) 
    bh= new box(1090,170,30,30) 
    bi= new box(1060,140,30,30)  

    g= createSprite(690,520,240,10)
    g.shapeColor="yellow"

    g2= createSprite(1060,220,200,10)
    g2.shapeColor="yellow"
    


    rope = new attach(pg.body,{x:50, y:100});
}

function draw(){
    background("brown")
    pg.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();

    ba.display();
    bb.display();
    bc.display();
    bd.display();
    be.display();
    bf.display();
    bg.display();
    bh.display();
    bi.display();

    g.display();
    g2.display();

    rope.display();

}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(pg.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    rope.fly();
    gameState = "launched";
}














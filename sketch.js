const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2;
var box3,box4;
var box5,box6;
var box7,box8;
var box9,box10;
var box11,box12;
var box13,box14;
var box15,box16;
var ground,polygon;
var polygon_img;
var slingshot;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y,40,40);

    ground = new Ground(600,height,1200,20);
    polygon = new Polygon(100,100);
    //level 1
    box1 = new Box(300,320,30,40);
    box2 = new Box(330,320,30,40);
    box3 = new Box(360,320,30,40);
    box4 = new Box(400,320,30,40);
    box5 = new Box(420,320,30,40);
    box6 = new Box(450,320,30,40);
    box7 = new Box(200,320,30,40);
    //level 2
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    //level 3
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    //top
    box16 = new Box(390,155,30,40);
    slingshot = new Slingshot(this.polygon,{x:100,y:200});
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    strokeWeight(4);
    polygon.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed (){
    if(keyCode === 32){
        slingshot.attach(polygon.body);        
    }
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world
var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,
box14,box15,box16,box17,box18,box19,box20,box20,box21,box22,box23,box24,box25

function preload() {
  getTime();
}

function setup(){
        var canvas = createCanvas(1200,600);
        engine = Engine.create();
        world = engine.world;
        circle=Bodies.circle(50,200,30)
        fill("yellow")
        World.add(world,circle)
        string=new String(circle,{x:200,y:200})
        ground = new Ground(600,590,1200,10)
        bar1= new Ground(590,400,350,5)
        bar2=new Ground(1000,200,250,5)
    //first bar 4th group
    box1=new Box3(525,380,40,50)
    box2=new Box3(530,380,40,50)
    box3=new Box3(560,380,40,50)
    box4=new Box3(590,380,40,50)
    box5=new Box3(620,380,40,50)
    box6=new Box3(650,380,40,50)
    box7=new Box3(680,380,40,50)
     //first bar 3th group
     box8=new Box2(550,330,40,50)
     box9=new Box2(570,330,40,50)
     box10=new Box2(590,330,40,50)
     box11=new Box2(610,330,40,50)
     box12=new Box2(630,330,40,50)
    //first bar 2nd group     
      box13=new Box1(560,285,40,50)
      box14=new Box1(590,280,40,50)
      box15=new Box1(620,285,40,50)
    //first bar 1st group
    box16=new Box3(590,230,40,50)
     //second bar 3th group
     box17=new Box3(920,195,40,50)
     box18=new Box3(960,195,40,50)
     box19=new Box3(1000,195,40,50)
     box20=new Box3(1040,195,40,50)
     box21=new Box3(1080,195,40,50)
     //second bar 2nd group
     box22=new Box1(960,125,40,50)
     box23=new Box1(1000,125,40,50)
     box24=new Box1(1040,125,40,50)
     //second bar 1st group
     box25=new Box2(1000,75,40,50)
  }

  function draw(){
      background("white");
      Engine.update(engine);
      ellipseMode(RADIUS)
      ellipse(circle.position.x,circle.position.y,30,30)
      drawSprites();
      ground.display();
      bar1.display();
      bar2.display();
      box1.display()
      box2.display()
      box3.display()
      box4.display()
      box5.display()
      box6.display()
      box7.display()
      box8.display()
      box9.display()
      box10.display()
      box11.display()
      box12.display()
      box13.display()
      box14.display()
      box15.display()
      box16.display()
      box17.display()
      box18.display()
      box19.display()
      box20.display()
      box21.display()
      box22.display()
      box23.display()
      box24.display()
      box25.display()
      string.display();
  }
  function mouseDragged(){
    Matter.Body.setPosition(circle, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}
function keyPressed(){
  if(keyCode===32){
   string.attach(circle)
  }
}
async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json()
  var dateTime=responseJSON.datetime
  var hour=dateTime.slice(11,13)
  if(hour>6&&hour<18){
  bg="day.jpg"
  }
  else{
  bg="night.jpg"
  }
  backgroundImg=loadImage(bg);
}
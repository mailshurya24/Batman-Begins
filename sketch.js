const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, Bruce;
var maxDrops = 100;
var drops = [];

function preload()
{

}

function setup()
{
    var canvas = createCanvas(400,1200);
    var x = (windowWidth - width)/2;
    var y = (windowHeight - height);
    canvas.position(x,y);
    
    engine = Engine.create();
    world = engine.world;

    Bruce = new Umbrella(200,1150,80);

    for(var i = 0; i<maxDrops; i++)
    {
        drops.push(new Drop(random(0,400), random(0,400)));
    }

}

function draw()
{
    Engine.update();
    
    Bruce.display();
    drops.display();
    drops.updatePosition();
}   
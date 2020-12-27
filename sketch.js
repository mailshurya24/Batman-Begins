const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, Bruce;
var maxDrops = 100;
var drops = [];

function preload()
{
    var thunderImg = loadImage("Thunder1.png");
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
        drops.push(new Drop(random(0,400), random(0,400), 70));
    }

    if(frameCount%100 === 0)
    {
        var thunder = createSprite(0,random(20,1180));
        thunder.lifetime = 30;
    }

}

function draw()
{
    Engine.update();
    
    Bruce.display();
    drops.display();
    drops.updatePosition();
    drawSprites();
}   
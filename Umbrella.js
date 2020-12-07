class Umbrella
{
    constructor(x,y,radius)
    {
        var options = 
        {
            isStatic: true
        }
        this.umbrella = Bodies.circle(x,y,radius/2.7,options);
        this.radius = radius;
        this.image = loadImage('Walking.png');
        World.add(world,this.umbrella);
    }

    display()
    {
        var pos = this.umbrella.position;
        image(this.image,pos.x,pos.y,50,50);
    }
}
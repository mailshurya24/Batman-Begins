class Drop
{
    constructor(x,y,radius)
    {
        var options = 
        {
            density:0.6,
            friction: 0.1
        }

        this.rain = Bodies.circle(x,y,radius/2.7,options);
        this.radius = radius;
        World.add(world,this.rain);
    }

    display()
    {
        var pos = this.rain.position;
        fill('blue');
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }

    updatePosition()
    {
        if(this.rain.position.y > height)
        {
            Body.setPosition(this.rain, {x: random(0,400), y: random(0,400)})
        }
    }
}
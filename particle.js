class Particle{
    constructor(x,y,radius){
      var opt={
         density: 0.05,
         friction:0.025
        }
      this.body = Bodies.circle(x,y,radius,opt);
      this.radius = radius;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
      ellipseMode(RADIUS);
      fill(random(0,255),random(10,255),random(10,255));
      ellipse(pos.x,pos.y,this.radius);
    }
    
}
class Plinko{
    constructor(x,y){
       var opt={
         isStatic: true
        }
      this.body = Bodies.circle(x,y,10,opt);
      this.radius = 10;

      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(pos.x,pos.y,this.radius);
    }
    
}
class Paper{
  constructor(x,y,radius){
     var option = {
          'isStatic' : false,
          'restitution' : 0.3,
          'friction': 0.5,
          'density':1.2
      }
      this.body =Matter. Bodies.circle(x,y,radius,option)
    this.radius = radius
    World.add(world,this.body)
  }
  display(){
    var pos =this.body.position;
    
    push();
    
    ellipseMode(RADIUS);
    strokeWeight(6)
    stroke("black")
    fill("darkgray");
    circle(pos.x,pos.y, this.radius);
    pop();
  }
  }

class Paper {
    constructor(x, y, height, angle) {
      var options = {
          isStatic:flase,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y,redius, options);
      this.redius = redius;
      

     
      
      World.add(world, this.body);
    }
    display(){
     
      ellipsemode(REDIUS);
     
      fill("yellow");
      
      circle(this.body.position.X,this.body.position.Y,this.redius);
    }
  };
  
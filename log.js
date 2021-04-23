class Dustbin {
    constructor(x, y, height, angle) {
      var options = {
          isStatic:flase,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,width, height, options);
      this.width = width;
      this.height = height;

      
      
      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      fill(255);
      rect(this.body.position.X,this.body.position.Y,this.width,this.height);
    }
  };
  
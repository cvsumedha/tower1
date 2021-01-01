class box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("box.png");
    
      
      World.add(world, this.body);
    }



    display(){
     // image(this.image, 0, 0, this.width, this.height);
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
     
      pop();
    }
  }
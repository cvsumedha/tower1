class polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygon.png");
      this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    }
  
    display() {
      super.display();
    }
  }
  
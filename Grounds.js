class Grounds {
    constructor() {
      var options = {
          isStatic: true
      }
    this.grounds= Bodies.rectangle(450,390,900,20,options)
    }
    display(){
  
      rectMode(CENTER);
      fill("brown");
      rect(this.grounds.position.x,this.grounds.position.y,900,20);
    }
  };
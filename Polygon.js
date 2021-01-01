class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
       
     this.polygon = Bodies,circle(50,200,200);
      World.add(world, polygon);
      this.image = loadImage("sprites/polygon.png");
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }
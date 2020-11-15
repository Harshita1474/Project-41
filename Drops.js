class Drops{
    constructor(x,y){
      this.rain = Bodies.circle(x, y, radius);
      this.radius=radius;  
      World.add(world, this.body);  
    }
  
    display() {
      push();
      fill("lightblue")
      ellipseMode(RADIUS);
      ellipse(0,0,20,20);
      pop();
      
    }

    reposition(){
      if(this.rain.position.y > 600){
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
      }
    }
};
  
class Bird{
  constructor(x,y,width,height,angle){
      var option = {
        density:1,
        frictionAir:0.005
      }
      this.body = Bodies.rectangle(x,y,width,height,angle,option);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
  }
  display(){
  var angle = this.body.angle;
  push();
    translate(this.body.position.x,this.body.position.y); 
    rotate(angle);
    fill("black");
    ellipse(0,0,this.width,this.height); 
    pop(); 
  }
  
    
    
   
  }


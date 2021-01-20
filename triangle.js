class triangle{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.1
            //isStatic:true
           
        }
       
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("triangle.PNG");
        World.add(world, this.body);
    
        
      }
     
      display(){
        //console.log(this.body.speed);
      
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
       rotate(angle);
        imageMode(CENTER);
        //strokeWeight(4);
        //fill("#9FAEB4");
        image(this.image,0,0,this.width, this.height);
        pop();
      
        
      
    }
    
  }
class chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:400
        }
        
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
    attach(body){
        this.chain.bodyA = body;
    }
    display(){
        if(this.chain.bodyA){
            var pA = this.chain.bodyA.position;
            var pB = this.pointB;
         push(); 
           stroke("black");
           strokeWeight(2);
           line(pA.x,pA.y,pB.x,pB.y);
           pop(); 
              
       }
     
}
    }
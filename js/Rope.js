class Rope {
    constructor (bodyA,bodyB,offsetX) {
        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            
        }
        this.offsetX = offsetX;
        
        this.chain = Matter .Constraint.create(options);
        World .add(world, this.chain);

    }
    display ( ) {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        stroke("white");
        line (pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y)
    }
}



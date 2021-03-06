class Projectile{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:10,
        }
        this.pointB = pointB;
        this.body =Constraint.create(option);
        World.add(world,this.body);
    }
    release(){
        this.body.bodyA =null;
    }
    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB =this.pointB;
            strokeWeight(1);
            stroke("grey");
            line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}


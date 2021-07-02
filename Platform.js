class Platform{
    constructor(x,y,widh,height){
        var option={
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=this.width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        fill (64,45,38);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
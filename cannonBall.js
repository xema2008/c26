class CannonBall{
    constructor(x,y){
        var options={
            isStatic:true
        };
        this.r=30;
        this.Body=Bodies.circle(x,y,this.r,options);
        this.image=loadImage("assets/cannonball.png");
        World.add(world,this.Body);
    }

    display(){
        var pos=this.Body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
    }

    shoot(){
        var newAngle=cannon.angle-28;
        newAngle=newAngle*(3.14/180);
        var velocity=p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.Body,false);
        Matter.Body.setVelocity(this.Body,{
            x:velocity.x*(180/3.14)
            ,y:velocity.y*(180/3.14)});
    }


}
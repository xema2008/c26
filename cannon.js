class Cannon{
    constructor(x,y,height,width,angle){
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.angle=angle;
        this.cannonImage=loadImage("assets/canon.png");
        this.baseImage=loadImage("assets/cannonBase.png");
    }
    display(){
        //console.log(this.angle);
        if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
            this.angle+=1;
        }
        if(keyIsDown(LEFT_ARROW)&&this.angle>-30){
            this.angle-=1;
        }
        
        //parte superior del cañon
            push();
            translate(this.x,this.y);
            rotate(this.angle);
            imageMode(CENTER);
            image(this.cannonImage,0,
                0,
                this.height,
                this.width);
            pop();
            //parte inferior
            image(this.baseImage,70,20,200,200);
            noFill();
            
        }
    }

class Block{
    constructor(x,y,width,height)  {
        var options= {
            restitution:0.4,
            friction:1.0
           
        }
        this.body = Bodies.rectancle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.Visibility = 255;
    }
    display() {

    if (this.body.speed<3) {
        var angle = this.body.angle;
        var position= this.body.position;
        push();
        translate(position.x, position.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();   
    }
    else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility)
        rect(999,999,this.width,this.height);
        pop();
    }
    
    }

    score(){
        if(this.Visibility<0 && this.Visibility >-105){
            score++;
        }
    }

}                                 
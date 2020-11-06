class Box {
    constructor(x,y,width,height){
        super(x,y);
        this.body = Bodies.rectangle(x,y,width,height);
        this.Visiblity = 255;
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed < 3 ){
            super.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            this.body(this.body, this.body.position.x,this.body.position.y);
            pop();
        }
    }
}
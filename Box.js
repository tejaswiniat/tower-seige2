class Box{
  constructor(x, y, width, height){
    var options={
      restiitution:0.4,
      friction:0
    }
    //super(x,y,width,height);
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    //this.image = loadImage("sprites/wood1.png");
    this.Visiblity=255;
  }

  display(){
    if(this.body.speed < 3){
      var angle=this.body.angle;
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill(255);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       pop();
    }
  }
}

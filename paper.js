class paper{
    constructor(x,y,r){
    
        var options={
          isStatic:false,
          restritution:3,
          friction:1,
          density:1.2
        }
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);



    }

    display(){
      var paperpos = this.body.position;
      push();
      translate(paperpos.x , paperpos.y);
      rectMode(CENTER);
      fill(255);
      ellipse(0,0,this.r, this.r);
      pop(); 








    }



}
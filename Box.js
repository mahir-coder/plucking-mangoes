class Boy{
    
  constructor(x,y,width,height){
      
      var options={
        'restitution':0,
        'friction':1,
        'density':1.2,
          isStatic:true
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.image = loadImage("Img/boy.png")
   //   this.x=x
     // this.y=y
      this.width=width
      this.height=height
      World.add(world,this.body)
      
  }
  display(){
    imageMode(CENTER)
  
  image(this.image, this.body.position.x, this.body.position.y, 200, 200);
   
  }
}

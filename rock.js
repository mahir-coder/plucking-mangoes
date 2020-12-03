class Rock{
    
  constructor(x,y,width,height){
      
      var options={
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          

      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.image = loadImage("Img/stone.png")
   //   this.x=x
     // this.y=y
      this.width=width
      this.height=height
      World.add(world,this.body)
      
      
  }
  display(){
    imageMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
  
  image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   
  }
}

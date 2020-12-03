class Mango{
    
  constructor(x,y,width){
      
      var options={
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          isStatic:true

      }
      this.body=Bodies.circle(x,y,width,options)
      this.image = loadImage("Img/mango.png")
   //   this.x=x
     // this.y=y
      this.width=width
      this.height=height
      World.add(world,this.body)
      
      
  }
  display(){
    imageMode(CENTER)
  
  image(this.image, this.body.position.x, this.body.position.y, 30, 30);
   
  }
}

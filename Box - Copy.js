class Tree{
    
  constructor(x,y,width,height){
      
      var options={
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          isStatic:true

      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.image = loadImage("Img/tree.png")
   //   this.x=x
     // this.y=y
      this.width=width
      this.height=height
      World.add(world,this.body)
      
      
  }
  display(){
    imageMode(CENTER)
  
  image(this.image, this.body.position.x, this.body.position.y, 300, 300);
   
  }
}

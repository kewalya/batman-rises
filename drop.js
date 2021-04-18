class Drops{
constructor(x,y){
var options={
    restitution:0.5,
    friction:0.1
}
this.drop=Bodies.circle(x,y,3,options)
World.add(world,this.drop)
this.radius=3
}
display(){
var pos=this.drop.position
ellipseMode(RADIUS)
fill("blue")
ellipse(pos.x,pos.y,this.radius,this.radius)

}
updateDrops(){
 if(this.drop.position.y>height){
Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
 }   
}


}
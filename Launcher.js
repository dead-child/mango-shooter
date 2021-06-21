class Launcher{
constructor(bodyA, pointB){
var options = {
bodyA: bodyA,
pointB: pointB,
stiffness: 0.004,
length: 10

}
this.sling = Constraint.create(options);
World.add(world, this.sling)
this.pointB = pointB
}



fly(){

    this.sling.bodyA = null; 

}

Display(){

    if(this.launcher.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

}
    
}






}
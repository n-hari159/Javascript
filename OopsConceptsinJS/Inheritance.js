function Fruit(fname,taste,color){       //Function Prototype and the name should start with Capital Letter(Bcz it is ntg but a Class)
    this.fname=fname;                     //Left hand side is assigning and right hand side is the actual parameter
    this.taste=taste;
    this.color=color;
    this.season=function(month){
        return month;
    }
}
Fruit.prototype.nametaste=function(){         // .prototype will make all properties available as the Fruit
    return this.fname+this.taste;             // Will return Orangetaste
}
function Orange(fname,taste,color){
    Fruit.call(this,fname,taste,color);
}
Orange.prototype=Object.create(Fruit.prototype);
var a=new Orange("orange","sweet","orange");
console.log(a.nametaste());
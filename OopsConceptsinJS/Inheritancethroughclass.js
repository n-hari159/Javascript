class Fruit{            // Class Creation
    constructor(fname,taste,color){
        this.fname=fname;
        this.taste=taste;
        this.color=color;
    }
    season(){           //  Defining Methond inside Constructor
        return season;
    };
}
class Orange extends Fruit{
    constructor(fname,taste,color,size){
        super(fname,taste,color);
        this.size=size;
    }
}
var orange = new Orange("Orange","Sweet","Orange","Medium");
console.log(orange);
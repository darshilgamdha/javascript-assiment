class Animal{
    constructor(name,color){
        this._name = name;
        this._color = color;
    }
    
    run(){
        console.log(this._name + " is running");
    }
}
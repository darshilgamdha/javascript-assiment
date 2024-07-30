// Create Constructor Function and Add Method:
// Task: Create a constructor function Vehicle that initializes with brand and model properties. Add a prototype method getDetails that returns a string "This is a [brand] [model].".

 function  vehicle(brand,model){
    this.brand =brand;
    this.model = model;
 }

 let vehicle1=new vehicle("BMW","M8");
 console.log(vehicle1);
 vehicle.prototype.getDetails = function(){
    return "This is a " + this.brand + " " + this.model + ".";
    }
    console.log(vehicle1.getDetails());

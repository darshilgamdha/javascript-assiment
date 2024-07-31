// Task: Create a constructor function Dog with properties breed and age. Add a prototype method bark that returns "Woof! I am a [breed].".
// Add Method to Prototype:

function Dog(breed, age) {
    this.breed = breed;
    this.age = age;
}
const myDog = new Dog('Labrador', 3);

Dog.prototype.bark = function() {
    return "Woof! I am a " + this.breed + ".";
};

console.log(myDog.bark());  

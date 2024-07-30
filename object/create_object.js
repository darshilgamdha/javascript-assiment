// Task: Create an object student with properties name set to 'John', age set to 21, and major set to 'Computer Science'. Add a method introduce that returns a string "Hi, I am [name], a [major] major.".

student = {
    name:"john",
    age:21,
    major:"computer science",
}
student.introduce = function(){
    return "Hi, I am " + this.name + ", a " + this.major + "" ;
    }
    console.log(student.introduce());
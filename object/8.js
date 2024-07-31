// Task: Write a function that adds a method describeJob to the Employee prototype, which logs "I work in the [department] department and my ID is [id]" when called.

function Employee(id, department) {
    this.id = id;
    this.department = department;
}


function DescribeJobMethod() {
    Employee.prototype.describeJob = function() {
        console.log("I work in the " + department + " department and my ID is " + id + ".");
    };
}


DescribeJobMethod();


const emp = new Employee(1, "Engineering");
emp.describeJob(); 

// Delete Object Property:
//         Task: Write a function that takes the object employee = { id: 101, name: 'Jane', department: 'HR', salary: 5000 } and deletes the salary property.

employee = {
        id: 101,
        name: 'Jane',
        department: 'HR',
        salary: 5000
}
// Solution
delete employee.salary;
console.log(employee);

// 43.	Write a program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

let salary = 100300;
let hra = 0;
let da = 0;
let grossSalary = 0;
if (salary <= 10000) {
  hra = 0.2 * salary;
  da = 0.8 * salary;
  grossSalary = salary + hra + da;
  console.log("Gross Salary is " + grossSalary);
} else if (salary <= 20000) {
  hra = 0.25 * salary;
  da = 0.9 * salary;
  grossSalary = salary + hra + da;
  console.log("Gross Salary is " + grossSalary);
} else {
  hra = 0.3 * salary;
  da = 0.95 * salary;
  grossSalary = salary + hra + da;
  console.log("Gross Salary is " + grossSalary);
}

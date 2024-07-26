// 39.	Write a program to check whether the triangle is equilateral, isosceles or scalene triangle.

let a = 1;
let b = 2;
let c = 5;

if (a == b && b == c) {
  console.log("Equilateral Triangle");
} else if (a == b || b == c || a == c) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}

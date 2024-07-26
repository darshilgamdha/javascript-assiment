// 38.	Write a program to input all sides of a triangle and check whether the triangle is valid or not.

let a = 70;
let b = 40;
let c = 60;
if (a + b > c && a + c > b && b + c > a) {
  console.log("Triangle is valid");
} else {
  console.log("Triangle is not valid");
}

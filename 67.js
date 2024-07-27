// 67.	Write a program to calculate the product of digits of a number.
let number = 12345;
let product = 1;


while (number > 0) {
    let digit = number % 10; 
    product = product * digit; 
    number = ~~(number / 10); 
}

console.log("The product of the digits is " + product);

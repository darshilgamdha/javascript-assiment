// 66.	Write a program to calculate the sum of digits of a number.
let number = 12345;
let sum = 0;

while (number > 0) {
    let digit = number % 10;
    sum = sum +  digit;
    number = ~~(number / 10); 
}

console.log("The sum of the digits is "+ sum);

// 73.	Write a program to find the power of a number using a for loop.
let base = 2;
let exponent = 3;
let result = 1;

// Calculate the power using a for loop
for (let i = 0; i < exponent; i++) {
    result *= base;
}

// Output the result
console.log(base + " to the power of " + exponent +  " is " + result);
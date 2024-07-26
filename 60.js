// 60.	Write a program to find the sum of all odd numbers between 1 to n.
let n =100;
let sum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
        sum = sum + i;
        }
        }
        console.log(sum);

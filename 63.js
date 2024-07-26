// 63.	Write a program to find the first and last digit of a number.
let num= 1234566;
let firstdigit = 0;
let lastdigit = 0;
while(num !=0){
    firstdigit = num % 10;
    num = ~~(num / 10);
    lastdigit = num % 10;
    }
    console.log("First digit is "+firstdigit+" and last digit is "+lastdigit);


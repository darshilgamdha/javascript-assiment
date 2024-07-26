// 36.	Write a program to count the total number of digit in a given amount 
let number= 1234567;
let count=0;
 while (number!= 0) { //123456 //12345
    number = ~~(number / 10);
    count++;
 }
 console.log("count is " + count ); // 7



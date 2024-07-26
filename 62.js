// 62.	Write a program to count the number of digits in a number.
let num = 1234748;
let count = 0;
while(num != 0){
    num =~~(num/10);
    count++;
}
console.log("count is " + count );
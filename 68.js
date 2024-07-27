// 68.	Write a program to enter a number and print its reverse.
let number = 1234556
reverse = ""
while (number != 0) {
    let last_digit = number % 10
    reverse = reverse + last_digit;
    number = ~~(number / 10)
    } console.log(reverse) 
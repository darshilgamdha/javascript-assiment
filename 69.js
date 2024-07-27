// 69.	Write a program to check whether a number is palindrome or not.
let n = 1214 ;
let original = n;

let reverse = 0 

while( n != 0){
    let digit = n % 10; //4 //3 //2 //1
    reverse = reverse * 10 + digit;

    n = ~~(n/10); //123 //12 //1 //0
}
console.log(reverse)

if(reverse == original){
    console.log("palindrome")
} else {
console.log("not palindrome")
}
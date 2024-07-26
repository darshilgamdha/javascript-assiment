// 55.	Write a program to print all alphabets from a to z. - using while loop

let a = 97; // ASCII code for 'a'
const z = 122; // ASCII code for 'z'

while (a <= z) {
  console.log(String.fromCharCode(a));
  a++;
}

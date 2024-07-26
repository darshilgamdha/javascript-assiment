// 32.	Write a program to input any character and check whether it is alphabet, digit or special character.
let a = "a";

if ((a >= "a" && a <= "z") || (a >= "A" && a <= "Z")) {
  console.log("Alphabet");
} else if (a <= "9" && a >= "0") {
  console.log("Digit");
} else {
  console.log("Special Character");
}

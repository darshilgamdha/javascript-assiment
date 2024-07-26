// 44.	Write a program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 150 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional subcharge of 20% is added to the bill

let electricity = 3000;
let bill = 0;

if (electricity <= 50) {
  bill = electricity * 0.5;
  console.log("Your bill is " + bill);
} else if (electricity <= 150) {
  bill = 50 * 0.5 + (electricity - 50) * 0.75;
  console.log("Your bill is " + bill);
} else if (electricity <= 250) {
  bill = 50 * 0.5 + 100 * 0.75 + (electricity - 150) * 1.2;
  console.log("Your bill is " + bill);
} else  {
  bill = 50 * 0.5 + 100 * 0.75 + (150 * 1.2 + (electricity - 250) * 1.5);
  console.log("Your bill is " + bill);
}
let subcharge = bill*0.2;
console.log("Your subcharge is " + subcharge);
let add = bill + subcharge;
console.log("Your bill with subcharge is " + add);
var price1 = Number(prompt("Enter the price of the first product:"));
var price2 = Number(prompt("Enter the price of the second product:"));
var price3 = Number(prompt("Enter the price of the third product:"));

var total = price1 + price2 + price3;
var discount = total * 10 / 100;
var finalBill = total - discount;

console.log("Total Price: Rs. " + total);
console.log("Discount (10%): Rs. " + discount);
console.log("Final Bill: Rs. " + finalBill);
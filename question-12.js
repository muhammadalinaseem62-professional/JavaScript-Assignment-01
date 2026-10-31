var basicSalary = Number(prompt("Enter your basic salary:"));

var houseAllowance = basicSalary * 20 / 100;
var medicalAllowance = basicSalary * 10 / 100;
var tax = basicSalary * 5 / 100;

var grossSalary = basicSalary + houseAllowance + medicalAllowance;
var netSalary = grossSalary - tax;

console.log("Basic Salary: Rs. " + basicSalary);
console.log("House Allowance (20%): Rs. " + houseAllowance);
console.log("Medical Allowance (10%): Rs. " + medicalAllowance);
console.log("Tax (5%): Rs. " + tax);
console.log("Gross Salary: Rs. " + grossSalary);
console.log("Net Salary: Rs. " + netSalary);
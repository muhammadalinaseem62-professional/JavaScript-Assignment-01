var subject1 = Number(prompt("Enter marks for Subject 1:"));
var subject2 = Number(prompt("Enter marks for Subject 2:"));
var subject3 = Number(prompt("Enter marks for Subject 3:"));
var subject4 = Number(prompt("Enter marks for Subject 4:"));
var subject5 = Number(prompt("Enter marks for Subject 5:"));

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var maximumMarks = 500;
var percentage = (totalMarks / maximumMarks) * 100;

console.log("Total Marks Obtained: " + totalMarks);
console.log("Maximum Marks: " + maximumMarks);
console.log("Percentage: " + percentage + "%");
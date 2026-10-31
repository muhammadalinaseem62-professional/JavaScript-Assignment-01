var pkr = Number(prompt("Enter the amount in Pakistani Rupees (PKR):"));

var exchangeRate = 280;

var usd = pkr / exchangeRate;

console.log("Amount in PKR: Rs. " + pkr);
console.log("Exchange Rate: 1 USD = 280 PKR");
console.log("Amount in USD: $" + usd);
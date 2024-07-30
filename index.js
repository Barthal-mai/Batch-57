"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
// Mock exchange rates for simplicity
var exchangeRates = {
    'USD': 1, // Base currency
    'EUR': 0.85,
    'JPY': 110.57,
    'GBP': 0.75,
    'PKR': 160
};
// Function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        throw new Error('Invalid currency');
    }
    var baseAmount = amount / exchangeRates[fromCurrency];
    return baseAmount * exchangeRates[toCurrency];
}
// Read input from the console
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the amount: ', function (amountStr) {
    var amount = parseFloat(amountStr);
    rl.question('Enter the from currency (e.g., USD): ', function (fromCurrency) {
        rl.question('Enter the to currency (e.g., EUR): ', function (toCurrency) {
            try {
                var convertedAmount = convertCurrency(amount, fromCurrency.toUpperCase(), toCurrency.toUpperCase());
                console.log("".concat(amount, " ").concat(fromCurrency.toUpperCase(), " is equal to ").concat(convertedAmount.toFixed(2), " ").concat(toCurrency.toUpperCase()));
            }
            catch (error) {
                console.error(error.message);
            }
            rl.close();
        });
    });
});

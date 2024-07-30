import readline from 'readline';

// Mock exchange rates for simplicity
const exchangeRates: { [key: string]: number } = {
    'USD': 1, // Base currency
    'EUR': 0.85,
    'JPY': 110.57,
    'GBP': 0.75,
    'PKR': 160
};

// Function to convert currency
function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        throw new Error('Invalid currency');
    }
    const baseAmount = amount / exchangeRates[fromCurrency];
    return baseAmount * exchangeRates[toCurrency];
}

// Read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the amount: ', (amountStr) => {
    const amount = parseFloat(amountStr);
    rl.question('Enter the from currency (e.g., USD): ', (fromCurrency) => {
        rl.question('Enter the to currency (e.g., EUR): ', (toCurrency) => {
            try {
                const convertedAmount = convertCurrency(amount, fromCurrency.toUpperCase(), toCurrency.toUpperCase());
                console.log(`${amount} ${fromCurrency.toUpperCase()} is equal to ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`);
            } catch (error) {
                console.error(error.message);
            }
            rl.close();
        });
    });
});

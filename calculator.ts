import inquirer from 'inquirer';

// Define the available operations
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

// Perform the calculation based on the operation
function calculate(num1: number, num2: number, operation: Operation): number {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            throw new Error('Invalid operation');
    }
}

// Prompt the user for input
async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number',
            filter: (input) => parseFloat(input),
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number',
            filter: (input) => parseFloat(input),
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: ['add', 'subtract', 'multiply', 'divide'],
        },
    ]);

    const { num1, num2, operation } = answers;
    const result = calculate(num1, num2, operation as Operation);

    console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
}

promptUser();

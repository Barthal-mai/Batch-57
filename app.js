import inquirer from "inquirer";
const systemGenerateNumber = Math.floor(Math.random() * 10);
const askQuestion = async () => {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "userGuessNumber",
            message: "Enter your number:"
        }
    ]);
    const { userGuessNumber } = answers;
    if (userGuessNumber === systemGenerateNumber) {
        console.log(`${userGuessNumber} is correct! The system generated number was ${systemGenerateNumber}.`);
    }
    else {
        console.log(`${userGuessNumber} is incorrect. The system generated number was ${systemGenerateNumber}.`);
    }
};
askQuestion();

const prompts = require("prompts");

const myAsyncCode = async () => {
	const question1 = {
		name: "total",
		type: "number",
		message: "What was the total bill?",
	};
	const question2 = {
		name: "tip",
		message: "How much are you tipping?",
		type: "number",
	};
	const questions = [question1, question2];
	// console.log(questions);
	const answers = await prompts(questions);

	const tipAmount = answers.total * (answers.tip / 100);

	console.log("Your tip should be: $" + tipAmount);
	console.log("Your total bill comes to: $" + (answers.total + tipAmount));
};

myAsyncCode();

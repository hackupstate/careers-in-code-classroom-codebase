const prompts = require("prompts");

(async () => {
	const obj = {
		key1: "abc",
		key2: 5,
		key3: false,
		key4: {
			keySubObj: 1,
		},
	};

	const num1 = await prompts({
		type: "number",
		name: "myNum1",
		message: "What number would you like to add first?",
	});

	const num2 = await prompts({
		type: "number",
		name: "myNum2",
		message: "Second number please!?",
	});

	console.log("Your sum is: " + (num1.myNum1 + num2.myNum2));
})();

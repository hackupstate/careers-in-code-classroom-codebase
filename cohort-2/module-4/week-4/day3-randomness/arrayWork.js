const messages = [
	{ text: "This is my first message", outgoing: true },
	{ text: "This is my second message", outgoing: false },
	{ text: "This is my third message", outgoing: true },
	{ text: "This is my last message", outgoing: false },
];

// let messagesText = [];

// for (const message of messages) {
// 	messagesText.push(message.text);
// }

// console.log(messagesText);

const messagesText = messages.map(function (message) {
	return message.text;
});

console.log(messagesText);

// shorthand
// const messagesText = messages.map((message) => message.text);

// let outgoingMessages = [];

// for (const message of messages) {
// 	if (message.outgoing) {
// 		outgoingMessages.push(message);
// 	}
// }

const outgoingMessages = messages.filter(function (message) {
	if (message.outgoing === true) {
		return true;
	} else {
		return false;
	}
});

//shorthand
// const outgoingMessages = messages.filter((message) => !message.outgoing);

const fruits = [
	{ name: "Apple", qty: 5 },
	{ name: "Oranges", qty: 15 },
	{ name: "Bananas", qty: 0 },
	{ name: "Strawberry", qty: 5 },
	{ name: "Blueberry", qty: 5 },
];

const fruitsWeAreOutOfObjs = fruits.filter((fruit) => {
	return fruit.qty === 0;
});

const fruitNamesWeAreOutOf = fruitsWeAreOutOfObjs.map(function (fruit) {
	return fruit.name;
});

// console.log(fruitNamesWeAreOutOf);

console.log(
	fruits.filter((fruit) => {
		return fruit.name.includes("berry");
	})
);

let messages = [
	{
		text: "Hi Mother! Happy mother's day to you!",
		timestamp: new Date("December 17, 1995 00:01:00"),
		iSentIt: true,
	},
	{ text: "Thank you child", timestamp: new Date(), iSentIt: false },
];
updateHTML();

function sendMessage(event) {
	event.preventDefault();
	const messageInput = document.getElementById("messageInput");
	messages.push({
		text: messageInput.value,
		iSentIt: true,
		timestamp: new Date(),
	});

	console.log(printArray(messages));
	messageInput.value = "";
	updateHTML();

	generateIncomingMessage();
}

function printArray(arr) {
	return arr.map((message) => message.text).join(" | ");
}

function generateIncomingMessage() {
	messages.push({
		text: `Person is typing...`,
		isSentIt: false,
		timestamp: new Date(),
	});
	console.log(printArray(messages));

	updateHTML();

	const secondsToWait = Math.random() * 10;
	console.log(`Milliseconds until send: ${secondsToWait * 1000}`);
	setTimeout(function () {
		messages.splice(messages.length - 1, 1);
		console.log(printArray(messages));

		messages.push({
			text: "This is a computer generated response",
			iSentIt: false,
			timestamp: new Date(),
		});
		console.log(printArray(messages));

		updateHTML();
	}, secondsToWait * 1000);
}

// function formatDate(timestamp) {
// 	let hours = timestamp.getHours();
// 	let minutes = timestamp.getMinutes();
// 	let seconds = timestamp.getSeconds();
// 	let isAm = true;
// 	if (hours === 12) {
// 		isAm = false;
// 	} else if (hours === 0) {
// 		isAm = true;
// 		hours = 12;
// 	} else if (hours > 12) {
// 		isAm = false;
// 		hours -= 12;
// 	}
// 	if (minutes < 10) {
// 		minutes = `0${minutes}`;
// 	}
// 	if (seconds < 10) {
// 		seconds = `0${seconds}`;
// 	}
// 	return `${hours}:${minutes}:${seconds} ${isAm ? "am" : "pm"}`;
// }

function formatDate(timestamp) {
	return new Intl.DateTimeFormat("default", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	}).format(timestamp);
}

function editMessage(index) {
	const newMessageText = window.prompt(
		"What would you like the message to say?"
	);

	messages[index].text = newMessageText;
	updateHTML();
}

function deleteMessage(index) {
	if (window.confirm("Are you sure you want to delete this?")) {
		messages.splice(index, 1);
		updateHTML();
	}
}

function updateHTML() {
	const messagesDiv = document.getElementById("messages");

	let htmlToUpdate = "";

	for (const [index, message] of messages.entries()) {
		if (message.iSentIt) {
			htmlToUpdate += `<div class="row message"><div class="col-2"></div>
            <div class="col-10 text-end">
			<div class="buttons">
				<a onclick="editMessage(${index})">edit</a> | <a onclick="deleteMessage(${index})">delete</a>
			</div>
                <span class="messageText"
                    >${message.text}</span
                >
                <div class="timestamp">${formatDate(message.timestamp)}</div>
            </div>
        </div>`;
		} else {
			htmlToUpdate += `<div class="row message">
            <div class="col-10">
                <span class="messageText userMessageText"
                    >${message.text}</span
                >
                <div class="timestamp">${formatDate(message.timestamp)}</div>
            </div>
        </div>`;
		}
	}

	messagesDiv.innerHTML = htmlToUpdate;
}

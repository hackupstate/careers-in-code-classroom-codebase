let messages = [];

function sendMessage(event) {
	event.preventDefault();
	const messageInput = document.getElementById("messageInput");
	messages.push({
		text: messageInput.value,
		iSentIt: true,
		timestamp: new Date(),
	});

	console.log(messages);
	messageInput.value = "";
	updateHTML();
}

function formatDate(timestamp) {
	let hours = timestamp.getHours();
	let minutes = timestamp.getMinutes();
	let seconds = timestamp.getSeconds();
	let isAm = true;
	if (hours > 12) {
		isAm = false;
		hours -= 12;
	}
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	return `${hours}:${minutes}:${seconds} ${isAm ? "am" : "pm"}`;
}

function updateHTML() {
	const messagesDiv = document.getElementById("messages");

	let htmlToUpdate = "";

	for (const message of messages) {
		console.log(message);
		if (message.iSentIt) {
			htmlToUpdate += `<div class="row message"><div class="col-2"></div>
            <div class="col-10 text-end">
                <span class="messageText"
                    >${message.text}</span
                >
                <div class="timestamp">${formatDate(message.timestamp)}</div>
            </div>
        </div>`;
		} else {
		}
	}

	messagesDiv.innerHTML = htmlToUpdate;
}

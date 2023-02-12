const MessagesList = ({ messages }) => {
	return (
		<div id="messages">
			{/* #4 Loop over all the messages passed in the from App state via a prop. Repeat #5-7 until all the messages are displayed */}
			{/* #19 Messages now has a new one to display, so we need to loop over them again */}
			{messages.map((message) => {
				console.log();
				// #5 Determine if the message was sent or received, and render the approriate component
				// #20 Determine if new message is sent/recieved, render the component...
				if (message.sent) {
					return (
						<SentMessage
							key={message.timestamp}
							text={message.text}
							timestamp={message.timestamp}
						/>
					);
				} else {
					return (
						<ReceivedMessage
							key={message.timestamp}
							message={message}
						/>
					);
				}
			})}
		</div>
	);
};

const ReceivedMessage = ({ message }) => {
	// #6A Recieve the info about the message via an object
	return (
		<div className="row">
			<div className="col-10">
				{/* #7A Show the text and formatted timestamp of the message */}
				<span className="messageText">{message.text}</span>
				<div className="timestamp">
					{message.timestamp.toLocaleString()}
				</div>
			</div>
		</div>
	);
};

const SentMessage = (props) => {
	// #6B Recieve two props from the parent (MessagesList) called text and timestamp
	console.log(props);
	return (
		<div className="row">
			<div className="col-2"></div>
			<div className="col-10 text-end">
				{/* #7B Show the text and formatted timestamp of the message */}
				<span className="messageText userMessageText">
					{props.text}
				</span>
				<div className="timestamp">
					{props.timestamp.toLocaleString()}
				</div>
			</div>
		</div>
	);
};

export default MessagesList;

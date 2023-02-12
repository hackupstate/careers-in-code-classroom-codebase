const MessagesList = ({ messages }) => {
	return (
		<div id="messages">
			{/* #9 Look in the prop for the messages, it starts out as empty so this loop doesn't run. */}
			{/* #19 Messages now has a new list to display, so we need to loop over them  */}
			{messages.map((message) => {
				console.log();
				// #20 Determine if the message was sent or received, and render the approriate component
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
	// #21A Recieve the info about the message via an object
	return (
		<div className="row">
			<div className="col-10">
				{/* #21B Show the text and formatted timestamp of the message */}
				<span className="messageText">{message.text}</span>
				<div className="timestamp">
					{message.timestamp.toLocaleString()}
				</div>
			</div>
		</div>
	);
};

const SentMessage = (props) => {
	// #21A Recieve two props from the parent (MessagesList) called text and timestamp
	console.log(props);
	return (
		<div className="row">
			<div className="col-2"></div>
			<div className="col-10 text-end">
				{/* #21B Show the text and formatted timestamp of the message */}
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

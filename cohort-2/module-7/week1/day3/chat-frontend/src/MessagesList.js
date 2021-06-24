export const MessagesList = ({ messages }) => {
	return (
		<div id="messages">
			{messages.map((message) => {
				if (message.received) {
					console.log(message.timestamp);
					return (
						<ReceivedMessage
							text={message.text}
							timestamp={message.timestamp}
						/>
					);
				} else {
					return <SentMessage message={message} />;
				}
			})}
			{/* <SentMessage />
			<ReceivedMessage /> */}
		</div>
	);
};

const SentMessage = (props) => {
	console.log(props);
	return (
		<div className="row message">
			<div className="col-2"></div>
			<div className="col-10 text-end">
				<div className="buttons">
					<a>edit</a> | <a>delete</a>
				</div>
				<span className="messageText">{props.message.text}</span>
				<div className="timestamp">{props.message.timestamp.toString()}</div>
			</div>
		</div>
	);
};

const ReceivedMessage = ({ text, timestamp }) => {
	return (
		<div className="row message">
			<div className="col-10">
				<span className="messageText userMessageText">{text}</span>
				<div className="timestamp">{timestamp.toString()}</div>
			</div>
		</div>
	);
};

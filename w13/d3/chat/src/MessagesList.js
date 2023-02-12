const MessagesList = () => {
	return (
		<div id="messages">
			<SentMessage text="Sent #1" />
			<ReceivedMessage text="My recieved message" />
			<SentMessage text="Sent #2" />
		</div>
	);
};

const ReceivedMessage = (props) => {
	return (
		<div className="row">
			<div className="col-10">
				<span className="messageText">{props.text}</span>
				<div className="timestamp">12/21/22 6:43 pm</div>
			</div>
		</div>
	);
};

const SentMessage = (props) => {
	return (
		<div className="row">
			<div className="col-2"></div>
			<div className="col-10 text-end">
				<span className="messageText userMessageText">
					{props.text}
				</span>
				<div className="timestamp">12/21/22 6:43 pm</div>
			</div>
		</div>
	);
};

export default MessagesList;

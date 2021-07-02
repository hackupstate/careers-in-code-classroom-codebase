export const MessagesList = ({ messages, setMessages }) => {
	return (
		<div id="messages">
			{messages.map((message, index) => {
				if (message.received) {
					return (
						<ReceivedMessage
							key={index}
							text={message.text}
							timestamp={message.timestamp}
						/>
					);
				} else {
					return (
						<SentMessage
							key={index}
							index={index}
							message={message}
							setMessages={setMessages}
						/>
					);
				}
			})}
			{/* <SentMessage />
			<ReceivedMessage /> */}
		</div>
	);
};

const SentMessage = (props) => {
	const editClicked = () => {
		const changedText = window.prompt(
			"What would you like to change the message to?"
		);
		console.log(props.message);
		fetch(`http://localhost:3001/messages/${props.message.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ text: changedText }),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				props.setMessages(data.messages);
			});
	};
	const deleteClicked = () => {
		if (window.confirm("Are you sure you want to delete this message")) {
			fetch(`http://localhost:3001/messages/${props.message.id}`, {
				method: "DELETE",
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					props.setMessages(data.messages);
				});
		}
	};

	console.log(props.message);

	return (
		<div className="row message">
			<div className="col-2"></div>
			<div className="col-10 text-end">
				<div className="buttons">
					<span onClick={editClicked}>edit</span> |{" "}
					<span onClick={deleteClicked}>delete</span>
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

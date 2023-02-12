import { useState } from "react";

const MessageInput = (props) => {
	// #9 Create state variable to keep track of what's typed in
	const [messageText, setMessageText] = useState("");

	const formSubmitted = (event) => {
		// #12 Prevent form from refreshing page
		event.preventDefault();
		// #13 Make a copy of the messages coming in from the App state props so we can push to it
		// We can not modify messages directly because state variables are immutable. Instead we have to use the set Function
		let currentMessages = [...props.messages];
		// #14 Add in current message text based off of input value from state. Includes timestamp and message type.
		currentMessages.push({
			text: messageText,
			timestamp: new Date(),
			sent: true,
		});

		// #15 Clear message input
		setMessageText("");
		// #16 Use updated array that now includes a message that was sent and set it into state
		props.setMessages(currentMessages);

		// setTimeout(() => {
		// 	currentMessages.push({
		// 		text: "Computer say whaaa",
		// 		timestamp: new Date(),
		// 		sent: false,
		// 	});
		// 	console.log(currentMessages);
		// 	props.setMessages(currentMessages);
		// }, 3000);
	};

	// #10 Render form with input and button
	return (
		// #12 User clicks button or hits enter to submit the form
		<form onSubmit={formSubmitted} className="row inputBar">
			<div className="col-10">
				<input
					type="text"
					className="form-control"
					value={messageText}
					onChange={(event) => {
						// #11 Take the user inputed text and store it in state
						setMessageText(event.target.value);
					}}
				/>
			</div>
			<div className="col-2">
				<button type="submit" className="btn btn-success">
					Send
				</button>
			</div>
		</form>
	);
};

export default MessageInput;

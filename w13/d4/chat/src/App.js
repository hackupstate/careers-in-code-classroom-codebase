import "./App.css";
import Header from "./Header";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import { useState } from "react";
// #1-10 is controlling the initial page load
// #11-16 User typing in and sending message
// #17-20... Display new user message

function App() {
	//#1 Creates array of messages stored in state
	// #17 setMessages runs from step #16 and updates array
	const [messages, setMessages] = useState([
		// { text: "Sent 1", timestamp: new Date(), sent: true },
		{ text: "Received", timestamp: new Date(), sent: false },
		// { text: "Sent 2", timestamp: new Date(), sent: true },
	]);

	return (
		<div className="App container">
			{/* #2 Show HTML in Header component */}
			<Header />
			{/* #3 Show Messages List, pass the array of messages via a prop */}
			{/* #18 Messages has now been updated, we need to revisit this component */}
			<MessagesList messages={messages} />
			{/* #8 Show input and send button, along with two props of the current messages, and a function to update that */}
			<MessageInput messages={messages} setMessages={setMessages} />
		</div>
	);
}

export default App;

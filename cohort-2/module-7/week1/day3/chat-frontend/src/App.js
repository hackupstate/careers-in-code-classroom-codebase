import Header from "./Header";
import "./App.css";
import { MessagesList } from "./MessagesList";
import { MessageInput } from "./MessageInput";
import { useState } from "react";

function App() {
	const [messages, setMessages] = useState([
		{
			text: "This is a message I sent",
			received: false,
			timestamp: new Date(),
		},
		{
			text: "This is a computer generated response",
			received: true,
			timestamp: new Date(),
		},
		{
			text: "This is a message I sent",
			received: true,
			timestamp: new Date(),
		},
	]);
	return (
		<div className="App container">
			<Header />
			<MessagesList messages={messages} />
			<MessageInput setMessages={setMessages} messages={messages} />
		</div>
	);
}

export default App;

import "./App.css";
import Header from "./Header";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import { useEffect, useState } from "react";

function App() {
	//#6 Creates placeholder array of messages that will eventually be loaded from DB
	// #17 setMessages runs from step #16 and updates array
	const [messages, setMessages] = useState([]);

	// #11 Run the useEffect because App has shown up (rendered) the first time
	useEffect(() => {
		const makeAPICall = async () => {
			// #13 Make the GET fetch REQuest to the backend on 3001 to /messages
			const response = await fetch(`http://localhost:3001/messages`);
			// #17 Parse the response from the backend using JSON
			const data = await response.json();
			console.log(data);
			// #18 Set the messages from the DB (backend) into state
			setMessages(data.messages);
		};
		// #12 Call the function from above
		makeAPICall();
	}, []);

	return (
		<div className="App container">
			{/* #7 Show HTML in Header component */}
			<Header />
			{/* #8 Show Messages List, pass the array of messages via a prop */}
			{/* #19 Messages has now been updated from the backend, we need to revisit this component */}
			<MessagesList messages={messages} setMessages={setMessages} />
			{/* #10 Show input and send button, along with two props of the current messages, and a function to update that */}
			<MessageInput messages={messages} setMessages={setMessages} />
		</div>
	);
}

export default App;

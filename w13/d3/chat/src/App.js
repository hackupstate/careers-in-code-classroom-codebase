import "./App.css";
import Header from "./Header";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";

function App() {
	return (
		<div className="App container">
			<Header />
			<MessagesList />
			<MessageInput />
		</div>
	);
}

export default App;

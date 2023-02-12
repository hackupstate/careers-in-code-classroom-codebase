import "./App.css";
import { useState } from "react";

function App() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	const formSubmitted = (event) => {
		event.preventDefault();
		setTasks([...tasks, newTask]);

		console.log(newTask);
	};

	const textUpdated = (event) => {
		setNewTask(event.target.value);
	};

	return (
		<div className="App">
			<form onSubmit={formSubmitted}>
				<input type="text" value={newTask} onChange={textUpdated} />
				<button type="submit">Add Task</button>
			</form>
			<ul>
				{tasks.map((task, index) => {
					return <li key={index}>{task}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;

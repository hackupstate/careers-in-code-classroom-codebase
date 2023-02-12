import "./App.css";
import { useState } from "react";

function App() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	const formSubmitted = (event) => {
		event.preventDefault();
		// #4 When we add a new task, add it as an object instead of a string, and default done to false
		setTasks([...tasks, { name: newTask, done: false }]);

		console.log(newTask);
	};

	const textUpdated = (event) => {
		setNewTask(event.target.value);
	};

	// #2 Add new function to run when done button is clicked
	const markAsDone = (index) => {
		// #6 Make a copy of the array from state so we can update a specific index
		let updatedTasks = [...tasks];
		// #7 Set the index of whatever button was clicked to done = true
		updatedTasks[index].done = true;
		//#8 Update the tasks in the array from the copy we just updated
		setTasks(updatedTasks);
	};

	return (
		<div className="App">
			<form onSubmit={formSubmitted}>
				<input type="text" value={newTask} onChange={textUpdated} />
				<button type="submit">Add Task</button>
			</form>
			<ul>
				{tasks.map((task, index) => {
					return (
						<li
							key={index}
							style={{
								// #9: Add in style prop that uses an object and an inline ternerary to
								//display a line through the item if it is set to done
								textDecoration: task.done
									? "line-through"
									: "inherit",
							}}
						>
							{/* #5 Modify rendering of each task to include name property */}
							{task.name} {/* #1 Add new done button */}
							<button
								onClick={() => {
									// #3 Add onclick and pass index as a parameter/argument
									markAsDone(index);
								}}
							>
								Done
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;

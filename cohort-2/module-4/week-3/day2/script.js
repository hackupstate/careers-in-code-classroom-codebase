let toDoList = [];

function addNewTask(event) {
	event.preventDefault();

	const formField = document.getElementById("newTaskField");
	toDoList.push(formField.value);
	formField.value = "";

	updateHTML();
}

function editButtonPressed(index) {
	const newName = window.prompt("Enter new name here:");
	toDoList[index] = newName;
	updateHTML();
}

function deleteButtonPressed(index) {
	// console.log(toDoList);
	if (window.confirm("Are you sure you want to delete this?")) {
		toDoList.splice(index, 1);
		// console.log(toDoList);
		updateHTML();
	}
}

function updateHTML() {
	const list = document.getElementById("list");
	let htmlToUpdate = "";

	//loop type 1
	for (const [index, toDoTask] of toDoList.entries()) {
		htmlToUpdate =
			htmlToUpdate +
			`<li>
			${toDoTask}
			<button onclick="editButtonPressed(${index})">Edit</button>
			<button onclick="deleteButtonPressed(${index})">Delete</button>
			</li>`;
	}
	list.innerHTML = htmlToUpdate;

	// //loop type 2
	// toDoList.map((toDoTask) => {
	// 	htmlToUpdate += `<li>${toDoTask}</li>`;
	// });

	//loop type 3
	// let counter = 0;
	// for (
	// 	let toDoTaskIndex = 0;
	// 	toDoTaskIndex < toDoList.length;
	// 	toDoTaskIndex++
	// ) {
	// 	counter++; //counter +=1 //counter = counter +1;
	// 	console.log(`Counter:`, counter);
	// 	console.log(`ToDoTaskIndex: `, toDoTaskIndex);
	// 	htmlToUpdate += `<li>${toDoList[toDoTaskIndex]}</li>`;
	// }
}

function resetToDos() {
	toDoList = [];
	updateHTML();
}

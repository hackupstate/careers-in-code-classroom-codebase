let toDoList = [
	{ name: "Item 1", done: false },
	{ name: "Item 2", done: false },
	{ name: "Item 3", done: false },
];
// let doneItems = [];
updateHTML();

function addNewTask(event) {
	event.preventDefault();

	const formField = document.getElementById("newTaskField");
	toDoList.push({ name: formField.value, done: false });
	formField.value = "";

	updateHTML();
}

function editButtonPressed(index) {
	const newName = window.prompt("Enter new name here:");
	toDoList[index].name = newName;
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

function doneButtonPressed(index) {
	// const doneTask = toDoList[index];
	// toDoList.splice(index, 1);
	// doneItems.push(doneTask);
	// console.log(doneItems);
	// updateHTML();

	// if (toDoList[index].done === true) {
	// 	toDoList[index].done = false;
	// } else {
	// 	toDoList[index].done = true;
	// }

	toDoList[index].done = !toDoList[index].done;

	updateHTML();
}

function updateHTML() {
	const list = document.getElementById("list");
	let htmlToUpdate = "";

	//loop type 1
	for (const [index, toDoTask] of toDoList.entries()) {
		// let style = "";
		// if (toDoTask.done === true) {
		// 	style = "line-through";
		// } else {
		// 	style = "none";
		// }

		htmlToUpdate =
			htmlToUpdate +
			`<li style="text-decoration: ${
				toDoTask.done === true ? "line-through" : "none"
			}">
			${toDoTask.name}
			<button onclick="editButtonPressed(${index})">Edit</button>
			<button onclick="deleteButtonPressed(${index})">Delete</button>
			<button onclick="doneButtonPressed(${index})">Done</button>
			</li>`;
	}

	// for (const [index, doneItem] of doneItems.entries()) {
	// 	htmlToUpdate =
	// 		htmlToUpdate +
	// 		`<li style="text-decoration: line-through;">
	// 		${doneItem}
	// 		<button onclick="editButtonPressed(${index})">Edit</button>
	// 		<button onclick="deleteButtonPressed(${index})">Delete</button>
	// 		</li>`;
	// }
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

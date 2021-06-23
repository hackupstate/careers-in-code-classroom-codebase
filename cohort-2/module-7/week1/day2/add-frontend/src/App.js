import "./App.css";
import { useState } from "react"; //#14 import useState

// #5 Clear out anything in this function from the boilerplate
function App() {
	// #13 Create num1 & num2 from useState
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	//#18A Create sum in state
	const [sum, setSum] = useState();

	// #11 Create my onclick function and console.log to make sure it's wired
	const add1 = () => {
		// #12 Have the problem where I can't access what's been typed in
		// #17 add console.log(num1, num2) to make sure they come out when the button is pressed
		// #18B Use setSum to make sure we can show result
		// #20 Get rid of all the code in this function and start from scratch to use endpoint instead
		// #21 Look at our backend code to get the proper route & figure out how to send data (route params)
		// #22 Use URL/endpoint/route template literal to dump in numbers from inputs (state) to the URL
		fetch(`http://localhost:3001/add/${num1}/${num2}`)
			.then((res) => {
				// #23 Data comes back as response that we extract the text from
				return res.text();
			})
			.then((text) => {
				// #24 Update the state based off the now accessible text from the response
				setSum(text);
			});
	};

	const add2 = () => {
		fetch(`http://localhost:3001/add2?firstNum=${num1}&secondNum=${num2}`)
			.then((res) => {
				return res.text();
			})
			.then((text) => {
				setSum(text);
			});
	};

	const add3 = () => {
		fetch(`http://localhost:3001/add3`, {
			method: "POST",
			body: JSON.stringify({ num1: num1, num2: num2 }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setSum(data.sum);
			});
	};

	// let sumToShow = null;
	// if (sum) {
	// 	sumToShow = <p>Sum: {sum}</p>;
	// }

	return (
		<div className="App">
			{/* #6 Add container & hello world to make sure CSS/bootstrap is working */}
			<div className="container">
				<h1>Hello World</h1>
				{/* {sumToShow} */}
				{/* #19 Add sum (ternary operator optional) to show up from state when we change it in the onClick */}
				{sum ? <p>Sum: {sum}</p> : null}
				{/* #8 Add labels for input */}
				<label>Num1: </label>
				{/* #7 Create two inputs with type number & className for styling */}
				<input
					type="number"
					className="form-control"
					onChange={(event) => {
						//#15 Add onChange that sets event target value into state
						setNum1(event.target.value);
					}}
					value={num1} //#16 Add value from state
				/>
				<label>Num2: </label>

				<input
					type="number"
					className="form-control"
					onChange={(event) => {
						setNum2(event.target.value);
					}}
					value={num2}
				/>
				{/* #9 Create button with classNames for styling  */}
				{/* #10 Add my onClick */}
				<button className="btn btn-primary" onClick={add1}>
					Add em up 1
				</button>
				<button className="btn btn-primary" onClick={add2}>
					Add em up 2
				</button>
				<button className="btn btn-primary" onClick={add3}>
					Add em up 3
				</button>
			</div>
		</div>
	);
}

export default App;

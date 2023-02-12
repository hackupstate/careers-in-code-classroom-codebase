// #4 hook button to click event
document.getElementById("calculateButton").onclick = () => {
	//#7 get inputs from HTML via DOM
	const totalInput = document.getElementById("totalInput");
	const tipInput = document.getElementById("tipInput");

	//#8 retrieve values and parse from string to number
	const total = parseFloat(totalInput.value);
	const tip = parseFloat(tipInput.value);

	console.log(typeof total);
	console.log(typeof tip);

	const tipAmount = total * (tip / 100);
	document.getElementById("results").innerHTML =
		"Your tip should be $" +
		tipAmount +
		". For a total of $" +
		(total + tipAmount) +
		".";
};

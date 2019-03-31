//console.log("loaded!");

// 1. listen for form changes
const form = document.getElementById("calculator");
//console.log(form);

// 1a. prevent default behavior
form.addEventListener("submit", function(event){
	event.preventDefault();
}); // submit end

// 1b. listen for form changes
form.addEventListener("change", function() {
	//console.log("form changed");
	// 2. collect inputs
	const billInputValue = document.getElementById("bill").value;
	//console.log(billInputValue);
	const billCents = billInputValue * 100;

	const tipRadios = document.getElementsByName("tip");
	//console.log(tipRadios);

	let tipPercentage = 0;
	// count, condition, incrementer
	for (let i = 0; i < tipRadios.length; i++) {
		//console.log(i);
		if (tipRadios[i].checked === true) {
			//console.log("CHECKED!!!!");
			tipPercentage = tipRadios[i].value;
			console.log(tipPercentage);
			break;
		}
	} // for loop end

	// 3. do some math
	// 20 * 0.15
	const tipCents = Math.round(billCents * tipPercentage);
	console.log(tipCents);
	const tipDollars = tipCents/100;
	console.log(tipDollars);

	const totalBillCents = billCents + tipCents;
	console.log(totalBillCents);
	const billDollars = totalBillCents/100;
	console.log(billDollars);

	// 4. output values
	const tipOutput = document.getElementById("totalTip");
	const billOutput = document.getElementById("totalBill");

	tipOutput.innerText = tipDollars.toFixed(2);
	billOutput.innerText = billDollars.toFixed(2);

}); // change end






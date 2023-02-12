//create async function so we can use the await keyword
(async () => {
	//make API call to NY Times to get all the best seller list categories
	const listResponse = await fetch(
		"https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=DSKBCViMGvaMIGaBwCQJAMSQw862MdQk"
	);
	//parse the JSON response from NY Times into an object
	const listData = await listResponse.json();
	//log the object out and start peeling back the layers
	console.log(listData.results);

	//create placeholder for options that includes an empty option so when the page loads, it stays blank
	let options = "<option></option>";

	//loop over each list in our results
	for (const list of listData.results) {
		//generate the option using value and display name in a template literal
		options += `<option value="${list.list_name_encoded}">
			${list.display_name}
		</option>`;
		console.log(list.display_name, list.list_name_encoded);
	}
	//after looping through each list, put the generate options HTML into the select
	document.getElementById("listSelector").innerHTML = options;

	//After selecting a list, show the top 5 books from it
})();

//event listener for when the dropdown changes
const listSelected = async (event) => {
	//get the encoded list name out of the option value
	const selectedList = event.target.value;

	//make API call to get books from selected list
	const booksResponse = await fetch(
		`https://api.nytimes.com/svc/books/v3/lists/current/${selectedList}.json?api-key=DSKBCViMGvaMIGaBwCQJAMSQw862MdQk`
	);
	//parse the JSON from the books response
	const booksData = await booksResponse.json();
	//peel back the object until we make it down to books array
	console.log(booksData.results.books);

	//placeholder for our results
	let booksHTML = "<ul>";

	//loop over all books in the list
	for (const book of booksData.results.books) {
		console.log(book);
		//if books rank is under 5
		if (book.rank <= 5) {
			//generate HTML using data from API in template literal to form HTML syntax
			booksHTML += `<li>${book.title} - ${book.author}<br/><img src="${book.book_image}" style="max-width: 75px;"/></div>`;
		}
	}
	booksHTML += "</ul>";
	//put our generated HTML into the div
	document.getElementById("results").innerHTML = booksHTML;
};

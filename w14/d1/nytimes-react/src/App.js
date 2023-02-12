import logo from "./logo.svg";
import { useState, useEffect } from "react";

function App() {
	//set up empty placeholder lists for results in state
	const [lists, setLists] = useState([]);
	const [books, setBooks] = useState([]);

	//useEffect only runs the first time a component is loaded
	useEffect(() => {
		(async () => {
			//make API call to NY Times to get all the best seller list categories
			const listResponse = await fetch(
				"https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=DSKBCViMGvaMIGaBwCQJAMSQw862MdQk"
			);
			//parse the JSON response from NY Times into an object
			const listData = await listResponse.json();
			//log the object out and start peeling back the layers
			console.log(listData.results);

			//store results in list
			setLists(listData.results);
		})();
	}, []);

	// on select of list
	const listSelected = async (event) => {
		const selectedList = event.target.value;

		//make API call to get books from selected list
		const booksResponse = await fetch(
			`https://api.nytimes.com/svc/books/v3/lists/current/${selectedList}.json?api-key=DSKBCViMGvaMIGaBwCQJAMSQw862MdQk`
		);
		//parse the JSON from the books response
		const booksData = await booksResponse.json();
		//peel back the object until we make it down to books array set that into state
		setBooks(booksData.results.books);
	};

	return (
		<div className="App">
			<select onChange={listSelected}>
				<option></option>
				{/* when lists are updated using set, automatically loop over each one to generate the HTML to make them show */}
				{lists.map((list) => {
					return (
						<option
							value={list.list_name_encoded}
							key={list.list_name_encoded}
						>
							{list.display_name}
						</option>
					);
				})}
			</select>
			<ul>
				{books.map((book) => {
					return (
						<li>
							{book.title} - {book.author}
							<br />
							<img
								src={book.book_image}
								style={{ maxWidth: 80 }}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;

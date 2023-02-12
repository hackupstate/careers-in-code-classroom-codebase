import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostEditor = () => {
	// #4 Set up three state variables so we can store what the user types into the form
	const [title, setTitle] = useState("");
	const [tagline, setTagline] = useState("");
	const [content, setContent] = useState("");
	// #5 Set up navigateTo so when the form is submitted, we have access to the router
	const navigateTo = useNavigate();

	useEffect(() => {
		console.log("Effect runs");
		if (title === "Trump") {
			alert("Stop it");
		}
	}, []);

	// #7C Form has been submitted, run this function
	const addPost = (event) => {
		// #8 Prevent the form from refreshing in the browser (default action)
		event.preventDefault();

		//#9 Construct an object with four keys & values, the first three are extracting the values
		// in state and the last key/value pair is storing the current date & time into a key called
		//"timestamp"
		const post = {
			title, //shorthand of title: title (ie the key is "title" and the value from state is also called title)
			tagline,
			content,
			timestamp: new Date(),
		};

		// #10 Check to make sure all the data (including all the form content and the time) are properly
		//stored in the object
		console.log(post);

		//#11 Set an empty variable that we can store posts in
		let posts;
		//#12 Retrieve the stored posts from local storage
		const storedPosts = window.localStorage.getItem("posts");

		//#13 Check to see if there are any stored posts
		if (storedPosts) {
			//#14 If there are stored posts, parse them from a JSON string to an array
			posts = JSON.parse(storedPosts);
		} else {
			//#15 Else there weren't any posts in local storage yet, so set our posts to an empty array
			posts = [];
		}

		//#16 Add in the object from step #9 we created with all the form content included from state,
		//to the array from #14 OR #15
		posts.push(post);

		//#17 Convert the posts array into a string and set that item into local storage using the key "posts"
		window.localStorage.setItem("posts", JSON.stringify(posts));
		//#18 Use the navigate function from step #5 to navigate us back to the homepage using the router
		navigateTo("/");
	};

	return (
		<div className="container">
			<h1>Post Editor</h1>
			{/* 7B Form is submitted, time to head to our JS function */}
			<form onSubmit={addPost}>
				<label>Title:</label>
				<input
					type="text"
					name="title"
					className="form-control"
					id="title"
					// #6A When the user types into the input text field, update what letters they press into the state
					value={title}
					onChange={(event) => {
						setTitle(event.target.value);
					}}
				/>
				<label>Tagline:</label>
				<input
					type="text"
					name="tagline"
					className="form-control"
					// #6B When the user types into the input text field, update what letters they press into the state
					value={tagline}
					onChange={(event) => {
						setTagline(event.target.value);
					}}
				/>
				<label>Content: </label>
				<textarea
					name="content"
					className="form-control"
					// #6C When the user types into the input text field, update what letters they press into the state
					value={content}
					onChange={(event) => {
						setContent(event.target.value);
					}}
				></textarea>
				{/* #7A Form is submitted */}
				<button type="submit" className="btn btn-primary">
					Post
				</button>
			</form>
		</div>
	);
};

export default PostEditor;

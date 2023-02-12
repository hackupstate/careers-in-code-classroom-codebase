import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostEditor = () => {
	const [title, setTitle] = useState("");
	const [tagline, setTagline] = useState("");
	const [content, setContent] = useState("");
	const navigateTo = useNavigate();

	const addPost = (event) => {
		event.preventDefault();

		const post = {
			title, //shorthand of title: title (ie the key is "title" and the value from state is also called title)
			tagline,
			content,
			timestamp: new Date(),
		};

		console.log(post);

		let posts;
		const storedPosts = window.localStorage.getItem("posts");

		if (storedPosts) {
			posts = JSON.parse(storedPosts);
		} else {
			posts = [];
		}

		posts.push(post);

		window.localStorage.setItem("posts", JSON.stringify(posts));
		navigateTo("/");
	};

	return (
		<div className="container">
			<h1>Post Editor</h1>
			<form onSubmit={addPost}>
				<label>Title:</label>
				<input
					type="text"
					name="title"
					className="form-control"
					id="title"
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
					value={tagline}
					onChange={(event) => {
						setTagline(event.target.value);
					}}
				/>
				<label>Content: </label>
				<textarea
					name="content"
					className="form-control"
					value={content}
					onChange={(event) => {
						setContent(event.target.value);
					}}
				></textarea>
				<button type="submit" className="btn btn-primary">
					Post
				</button>
			</form>
		</div>
	);
};

export default PostEditor;

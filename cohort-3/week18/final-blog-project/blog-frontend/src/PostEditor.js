import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import APIUrl from "./APIUrl";

const NewPost = () => {
	const [postTitle, setPostTitle] = useState("");
	const [postContent, setPostContent] = useState("");
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		if (params.id !== "newPost") {
			const loadContent = async () => {
				const response = await fetch(`${APIUrl}/post/${params.id}`);
				const data = await response.json();
				console.log(data);
				setPostContent(data.post.content);
				setPostTitle(data.post.title);
			};
			loadContent();
		}
	}, []);

	const editPost = async (evt) => {
		evt.preventDefault();
		await fetch(
			`${APIUrl}/post${params.id === "newPost" ? "" : `/${params.id}`}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					postTitle,
					postContent,
				}),
				credentials: "include",
			}
		);

		navigate("/admin");
	};

	return (
		<div className="container">
			<h1>{params.id === "newPost" ? "New" : "Edit"} Post</h1>
			<Link to="/admin">Back to Admin Home</Link>
			<form onSubmit={editPost}>
				<label>Post Title:</label>
				<input
					type="text"
					className="form-control"
					value={postTitle}
					onChange={(evt) => {
						setPostTitle(evt.target.value);
					}}
				></input>
				<br />
				<label>Post Content:</label>
				<textarea
					className="form-control"
					value={postContent}
					onChange={(evt) => {
						setPostContent(evt.target.value);
					}}
				/>
				<br />
				<button type="submit" className="btn btn-primary">
					Post
				</button>
			</form>
		</div>
	);
};

export default NewPost;

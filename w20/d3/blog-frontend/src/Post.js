import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Post = () => {
	// #32 Get access to the parameters defined in the path in the Route in App.js
	const params = useParams();
	const navigateTo = useNavigate();
	// #33 Create a placeholder in state to eventually hold the data to show the post content
	// #40 Set is called from #39 so make the matchingPost be stored in post
	const [post, setPost] = useState();

	// #35 Run this use effect now that something has been displayed (returned or render) the first time
	useEffect(() => {
		console.log(params);
		const makeAPICall = async () => {
			const postResponse = await fetch(
				`http://localhost:3001/post/${params.id}`
			);
			const postData = await postResponse.json();
			setPost(postData.post);
		};
		makeAPICall();
	}, [params.id]);

	// #34A If there is not a post
	// #41 Ignore this if statement because the post exists
	if (!post) {
		return (
			<div>
				{/* #34B Show a message that the post does not exist (or hasn't been loaded yet)*/}
				<h1>Post does not exist or is loading...</h1>
			</div>
		);
	}

	const deleteClicked = async () => {
		const deleteResponse = await fetch(
			`http://localhost:3001/post/${params.id}`,
			{
				method: "DELETE",
			}
		);
		navigateTo("/");
	};

	// #42 We skipped the if return from #41 so we run the code in here
	return (
		<div>
			{/* #43 Make the post content stored in state show up using the keys that were set from #9 */}
			<h1>{post.title}</h1>
			<h3>{post.tagline}</h3>
			<p>{post.content}</p>
			<div>
				<span
					style={{
						color: "red",
						textDecoration: "underline",
						cursor: "pointer",
					}}
					onClick={deleteClicked}
				>
					Delete
				</span>
			</div>
		</div>
	);
};

export default Post;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
	// #32 Get access to the parameters defined in the path in the Route in App.js
	const params = useParams();
	// #33 Create a placeholder in state to eventually hold the data to show the post content
	// #40 Set is called from #39 so make the matchingPost be stored in post
	const [post, setPost] = useState();

	// #35 Run this use effect now that something has been displayed (returned or render) the first time
	useEffect(() => {
		// #36 Get posts from local storage
		const storedPosts = window.localStorage.getItem("posts");
		// #37 Parse the posts from JSON string into array
		const posts = JSON.parse(storedPosts);

		// #38A We need to find the post from local storage that matches the timestamp param in the URL
		const matchingPost = posts.find((post) => {
			//#38B This an algorithm that tells the computer how to match the posts
			//array to the timestamp from the params in the URL
			return post.timestamp === params.timestamp;
		});
		//#39 Take the result of the find algorithm from #38 and set it into state
		setPost(matchingPost);
	}, [params.timestamp]);

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

	// #42 We skipped the if return from #41 so we run the code in here
	return (
		<div>
			{/* #43 Make the post content stored in state show up using the keys that were set from #9 */}
			<h1>{post.title}</h1>
			<h3>{post.tagline}</h3>
			<p>{post.content}</p>
		</div>
	);
};

export default Post;

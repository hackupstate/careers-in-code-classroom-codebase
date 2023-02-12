import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// #19 Define Home component that is reference as a route in App.js
const Home = () => {
	//#20 Create a new state variable to hold our posts
	//#26 Update the postsInState based off the parameter of setPostsInState from line #25
	const [postsInState, setPostsInState] = useState([]);
	useEffect(() => {
		// #22 The page loads for the first time, run the code in here
		// #23 Go get the posts from local storage
		const storedPosts = window.localStorage.getItem("posts");

		// #24 Either parse the posts or assume there aren't any and use an empty list instead
		let posts;
		if (storedPosts) {
			posts = JSON.parse(storedPosts);
		} else {
			posts = [];
		}

		//#25 Take the results of #24 and set them into state
		setPostsInState(posts);
	}, []);
	return (
		<div>
			<h1>Home</h1>
			<div className="row">
				{/* #21 This loop doesn't run yet because the posts from local storage have not been loaded into state */}
				{/* #27 The state was updated from #25 (and #26) so we need to rerun this loop. Loop over every item in 
				state and return out what each post is supposed look like */}
				{postsInState.map((post) => {
					return (
						// #28 Set a unique key for each item in posts so React can keep track of them if they change
						<div className="col-4" key={post.timestamp}>
							<div className="card">
								<div className="card-body">
									{/* #29 Use the data from the post in the posts array from state to show the title. This data structure is from #9 */}
									<h5 className="card-title">{post.title}</h5>
									<h6>
										{new Date(
											post.timestamp
										).toLocaleDateString()}{" "}
										{new Date(
											post.timestamp
										).toLocaleTimeString()}
									</h6>
									<p className="card-text">{post.tagline}</p>
									{/* #30 User clicks on read more button which links us to /post/the timestamp for this post from the data coming from the loop */}
									<Link
										to={`/post/${post.timestamp}`}
										className="btn btn-primary"
									>
										Read more
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<Link to="/postEditor">Go to Post Editor</Link>
		</div>
	);
};

export default Home;

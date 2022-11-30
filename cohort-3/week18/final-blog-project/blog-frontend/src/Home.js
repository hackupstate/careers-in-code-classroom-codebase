import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIUrl from "./APIUrl";
const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const response = await fetch(`${APIUrl}/posts`);
			const data = await response.json();
			setPosts(data.posts);
		};

		getPosts();
	}, []);

	return (
		<div className="container">
			<h3>Latest Posts:</h3>
			{posts.map((post) => {
				return (
					<div key={post.id} className="card">
						<div className="card-body">
							<h5 className="card-title">{post.title}</h5>
							<p className="card-text">{post.content}</p>
						</div>
					</div>
				);
			})}
			<Link to="/login">Login</Link>
		</div>
	);
};

export default Home;

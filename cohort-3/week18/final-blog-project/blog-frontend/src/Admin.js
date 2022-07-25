import { useEffect, useState } from "react";
import APIUrl from "./APIUrl";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
	let navigate = useNavigate();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const checkAuthStatus = async () => {
			const response = await fetch(`${APIUrl}/loginStatus`, {
				credentials: "include",
			});
			const data = await response.json();
			if (!data.loggedIn) {
				navigate("/login");
			} else {
				getPosts();
			}
		};
		checkAuthStatus();
	}, []);

	const getPosts = async () => {
		const response = await fetch(`${APIUrl}/posts`);
		const data = await response.json();
		setPosts(data.posts);
	};

	const deletePost = async (id) => {
		if (window.confirm("Ya sure you want to delete?")) {
			await fetch(`${APIUrl}/post/${id}`, {
				method: "DELETE",
				credentials: "include",
			});
			getPosts();
		}
	};

	return (
		<div className="container">
			<h1>Admin</h1>
			<Link to="/admin/postEditor/newPost">New Post</Link> |{" "}
			<Link to="/">Home</Link>
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => {
						return (
							<tr key={post.id}>
								<td>{post.title}</td>
								<td>
									<Link to={`/admin/postEditor/${post.id}`}>
										Edit
									</Link>
								</td>
								<td>
									<span
										style={{
											textDecoration: "underline",
											color: "blue",
											cursor: "pointer",
										}}
										onClick={() => {
											deletePost(post.id);
										}}
									>
										Delete
									</span>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Admin;

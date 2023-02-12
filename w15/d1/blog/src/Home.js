import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to="/postEditor">Go to Post Editor</Link>
		</div>
	);
};

export default Home;

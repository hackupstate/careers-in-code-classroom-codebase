import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// #1 Import Component pages from seperate files so we can use them in the router
import Home from "./Home";
import PostEditor from "./PostEditor";
import Post from "./Post";
import Header from "./Header";
import Login from "./Login";

function App() {
	return (
		<div className="App">
			<Header />
			{/* #2 Set up as specific type of router that can be used in the browser */}
			<BrowserRouter>
				<Routes>
					{/* #3 Define the paths and components (elements) that show show up at each route */}
					<Route path="/" element={<Home />} />
					<Route path="/postEditor/" element={<PostEditor />} />
					{/* #31 URL in browser changed to /post/timestamp from post. The URL matches the path because
					the path includes a : telling the router to expect a params variable in the URL.
					Because the path matches, show the Post element instead */}
					<Route path="/post/:id" element={<Post />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

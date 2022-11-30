import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Admin from "./Admin";
import PostEditor from "./PostEditor";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" index element={<Login />} />
					<Route path="/admin" element={<Admin />} />
					<Route
						path="/admin/postEditor/:id"
						element={<PostEditor />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

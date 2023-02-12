import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostEditor from "./PostEditor";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/postEditor" element={<PostEditor />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Project from "./Project.js";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* #7 Tell the router the project num is going to be a param */}
					<Route path="/project/:projectNum" element={<Project />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

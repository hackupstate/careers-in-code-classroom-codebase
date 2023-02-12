import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Page2 from "./Page2";
import Egg from "./Egg";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sleet" element={<Page2 />} />
					<Route path="/egg" element={<Egg />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

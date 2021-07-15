import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Customers from "./Customers";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/customers">
						<Customers />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

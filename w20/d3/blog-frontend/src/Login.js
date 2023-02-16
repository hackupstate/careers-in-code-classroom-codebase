import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigateTo = useNavigate();

	// A3 Run login form submission function
	const loginFormSubmitted = async (evt) => {
		evt.preventDefault();

		// A4 Make fetch request to backend
		const loginResponse = await fetch(`http://localhost:3001/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			// A5 Include the typed in email and password from form
			body: JSON.stringify({ email, password }),
			// A6 Also include the credentials between the browser and server
			credentials: "include",
		});
		const loginData = await loginResponse.json();
		if (loginData.error) {
			alert(loginData.error);
		} else {
			// A13: The user is authenticated according to the backend, take them to the post editor
			navigateTo("/postEditor");
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginFormSubmitted}>
				<label className="form-label">Email:</label>
				<input
					type="email"
					className="form-control"
					onChange={(evt) => {
						// A1: Updates typed in value in state
						setEmail(evt.target.value);
					}}
					value={email}
				/>
				<label className="form-label">Password</label>
				<input
					type="password"
					className="form-control"
					onChange={(evt) => {
						setPassword(evt.target.value);
					}}
					value={password}
				/>
				{/* A2: User clicks login button */}
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;

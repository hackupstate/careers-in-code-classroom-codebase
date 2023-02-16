import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginFormSubmitted = async (evt) => {
		evt.preventDefault();

		const loginResponse = await fetch(`http://localhost:3001/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
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
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;

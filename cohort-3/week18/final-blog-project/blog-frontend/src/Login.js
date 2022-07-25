import { useState, useEffect } from "react";
import APIUrl from "./APIUrl";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [error, setError] = useState();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	let navigate = useNavigate();

	useEffect(() => {
		const checkAuthStatus = async () => {
			const response = await fetch(`${APIUrl}/loginStatus`, {
				credentials: "include",
			});
			const data = await response.json();
			if (data.loggedIn) {
				navigate("/admin");
			}
		};
		checkAuthStatus();
	}, []);

	const login = async (evt) => {
		evt.preventDefault();

		try {
			const response = await fetch(`${APIUrl}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					password,
				}),
				credentials: "include",
			});
			const data = await response.json();
			if (data.error) {
				setError(data.error);
			} else {
				navigate("/admin");
			}
		} catch (error) {
			setError("Login API call failed. Check the console");
			console.error(error);
		}
	};

	return (
		<div className="container">
			<form onSubmit={login}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						onChange={(evt) => {
							setUsername(evt.target.value);
						}}
						value={username}
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="exampleInputPassword1"
						className="form-label"
					>
						Password
					</label>
					<input
						type="password"
						className="form-control"
						onChange={(evt) => {
							setPassword(evt.target.value);
						}}
						value={password}
					/>
				</div>
				<div style={{ color: "red" }}>{error}</div>
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;

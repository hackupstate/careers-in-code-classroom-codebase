import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4 card" style={{ marginTop: 30 }}>
						<form className="card-body">
							<div className="mb-3">
								<label for="exampleInputEmail1" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
								/>
							</div>
							<div className="mb-3">
								<label for="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
								/>
							</div>
							<Link to="/customers">
								<button
									type="submit"
									className="btn btn-primary"
									style={{ width: "100%" }}
								>
									Log In
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

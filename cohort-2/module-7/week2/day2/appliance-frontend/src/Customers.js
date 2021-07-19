import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Customers = () => {
	return (
		<div>
			<Navbar />
			<div class="container-fluid">
				<div className="row">
					<div className="col-3">
						<Sidebar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customers;

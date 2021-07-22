const Sidebar = () => {
	return (
		<div
			style={{
				height: "calc(100vh - 50px)",
				backgroundColor: "#c6c6c6",
				padding: 15,
			}}
		>
			<ul className="list-group">
				<li className="list-group-item">Customers</li>
				<li className="list-group-item">Appliances</li>
				<li className="list-group-item">Service Orders</li>
				<li className="list-group-item">S.O. Assignment</li>
				<li className="list-group-item">Manage Users</li>
				<li className="list-group-item">Reports</li>
				<li className="list-group-item">Parts</li>
				<li
					className="list-group-item"
					onClick={() => {
						delete localStorage.password;
						delete localStorage.email;
						window.location = "/";
					}}
				>
					Sign out
				</li>
			</ul>
		</div>
	);
};
export default Sidebar;

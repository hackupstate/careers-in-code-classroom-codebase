const Sidebar = () => {
	return (
		<div
			style={{
				marginTop: 10,
				height: "calc(100vh - 50px)",
				backgroundColor: "#c6c6c6",
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
				<li className="list-group-item">Sign out</li>
			</ul>
		</div>
	);
};
export default Sidebar;

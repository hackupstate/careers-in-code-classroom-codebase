import { Outlet } from "react-router-dom";
import Nav from "./lib/Nav";
import Footer from "./Footer";

const Template = () => {
	return (
		<div className="container">
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Template;

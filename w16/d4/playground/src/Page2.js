import Navbar from "./Navbar";
import "./Pretty.scss";
import useWindowWidth from "./useWindowWidth";

const Page2 = () => {
	const width = useWindowWidth();
	return (
		<div id="page2">
			Width: {width}
			<Navbar />
			<h1>Page 2</h1>
			<p>Max is awesome-r</p>
			<a href="yahoo.com">Yahoo</a>
		</div>
	);
};

export default Page2;

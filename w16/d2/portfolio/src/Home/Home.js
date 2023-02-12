import { Link } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import "./Home.scss";

const Home = () => {
	return (
		<div className="container" id="home">
			<Header />
			<a href="https://google.com">Google Me!</a>
			<About />
			<Contact />
			<Portfolio />
			<Footer />
		</div>
	);
};

export default Home;

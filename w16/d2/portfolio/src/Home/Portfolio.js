import { Link } from "react-router-dom";
// #1 import data from file in the folder above this one
import data from "../Data";

const Portfolio = () => {
	console.log(data);
	return (
		<section id="portfolio">
			<h1>Portfolio</h1>
			<p>
				To view more details about the projects, click on any of the
				cards.
			</p>
			<div className="row">
				{/* for (const projectData of data){return <Component {...projectData}}/> */}
				{/* #2 Loop over all the project objects in the array */}
				{data.map((projectData, index) => {
					// #3 Make our project component show up for each object
					return (
						// #4 Dump the key/value pairs from the object into as props and also pass the index from the map loop
						<Project {...projectData} index={index} key={index} />
					);
				})}
			</div>
		</section>
	);
};

const Project = ({ img, title, text, button, index }) => {
	return (
		<div className="col-sm-6 col-md-4">
			<div className="card">
				<img
					src={img}
					className="card-img-top"
					alt={`${title} screenshot`}
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
					{/* #5 use the index to generate the link with the project number as part of the URL */}
					<Link to={`/project/${index}`} className="btn btn-primary">
						{button}
					</Link>
				</div>
			</div>
			{/* <!-- end of card--> */}
		</div>
	);
};

export default Portfolio;

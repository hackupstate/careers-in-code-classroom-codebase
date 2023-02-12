import data from "./Data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Project = () => {
	// #8 Create an empty placeholder for the project data to go into state
	const [projectData, setProjectData] = useState();
	// #9 Set up the ID to come out of the URL params fromt he router
	const params = useParams();

	// #11 Component loaded for the first time so...
	useEffect(() => {
		// #12 Set the state using the data from the other file and the param from the URL
		setProjectData(data[params.projectNum]);
	}, []);

	// #10 If the data hasn't been loaded yet, show the loading message
	// #13 Now we have the project data so skip this if/return
	if (!projectData) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>Project</h1>
			<a href="https://google.com">Google Me!</a>
			{/* #14 Show the title from the state that got loaded in the use effect */}
			{projectData.title}
		</div>
	);
};

export default Project;

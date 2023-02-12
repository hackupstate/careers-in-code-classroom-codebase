import { useEffect, useState } from "react";

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});
	}, []);

	return windowWidth;
};

export default useWindowWidth;

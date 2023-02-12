import React from "react";
class Egg extends React.Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
		};
	}

	buttonClicked() {
		this.setState({ counter: this.state.counter + 1 });
	}

	render() {
		return (
			<div>
				Button has been clicked {this.state.counter} times
				<button
					onClick={() => {
						this.buttonClicked();
					}}
				>
					Click me
				</button>
			</div>
		);
	}
}

export default Egg;

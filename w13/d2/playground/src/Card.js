const Card = (props) => {
	console.log(props.num);
	return (
		<div className="col">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">Card #{props.num}!</h5>
					<p class="card-text">{props.text}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;

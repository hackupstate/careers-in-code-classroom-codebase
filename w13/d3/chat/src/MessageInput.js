const MessageInput = () => {
	return (
		<div className="row inputBar">
			<div className="col-10">
				<input type="text" className="form-control" />
			</div>
			<div className="col-2">
				<button className="btn btn-success">Send</button>
			</div>
		</div>
	);
};

export default MessageInput;

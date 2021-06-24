import { useState } from "react";

export const MessageInput = ({ setMessages, messages }) => {
	const [text, setText] = useState("");
	const onSubmit = (evt) => {
		evt.preventDefault();
		// console.log(text);
		setMessages([
			...messages,
			{
				text: text,
				received: false,
				timestamp: new Date(),
			},
		]);
		setText("");
	};
	return (
		<form className="row inputBar" onSubmit={onSubmit}>
			<div className="col-10">
				<input
					className="form-control"
					type="text"
					value={text}
					onChange={(evt) => {
						setText(evt.target.value);
					}}
				/>
			</div>
			<div className="col-2">
				<button className="btn btn-success" type="submit">
					Send
				</button>
			</div>
		</form>
	);
};

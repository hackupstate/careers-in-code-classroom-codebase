const Contact = () => {
	return (
		<section id="contact">
			<div className="row">
				<div className="col-12">
					<h1>Contact</h1>
				</div>
				{/* <!-- end of col-12 --> */}
			</div>
			{/* <!-- end of first row in contact--> */}
			<div className="row">
				<div className="col-sm-12 col-md-6">
					{/* <!-- 10/17 Mon - Left off here. Need to get text to show up --> */}
					Want to get in touch? Fill out the form or shoot me an{" "}
					<a href="mailto:max@zane.tech">email</a>.
				</div>
				{/* <!-- end of first col in row #2 --> */}
				<div className="col-sm-12 col-md-6">
					<div className="row">
						<div className="col-6">
							<input type="text" placeholder="First Name" />
						</div>
						{/* <!-- end col-6 for first name --> */}
						<div className="col-6">
							<input type="text" placeholder="Last Name" />
						</div>
						{/* <!-- end of col-6 for last name--> */}
					</div>
					{/* <!-- end of first row in form--> */}
					<div>
						<input type="email" placeholder="Email" />
					</div>
					<div>
						<textarea placeholder="What's your message?"></textarea>
					</div>
					<div>
						<button type="button" className="btn btn-primary">
							Send message 📬
						</button>
					</div>
				</div>
				{/* <!-- end of second col in row #2--> */}
			</div>
			{/* <!-- end of second row--> */}
		</section>
	);
};

export default Contact;

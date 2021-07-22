import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState, useRef } from "react";

let allCustomers;
const Customers = () => {
	const [customers, setCustomers] = useState(null);
	const table = useRef(null);
	const [zipCode, setZipCode] = useState("");
	const [totalPages, setTotalPages] = useState(null);
	const [currentPageNum, setCurrentPageNum] = useState(1);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`http://localhost:3001/customers/${currentPageNum}`,
				{
					method: "GET",
					headers: {
						email: localStorage.email,
						password: localStorage.password,
					},
				}
			);
			const data = await response.json();
			setTotalPages(Math.ceil(data.customers.count / 5));
			setCustomers(data.customers.rows);
			allCustomers = data.customers.rows;
		})();
	}, [currentPageNum]);

	const addCustomer = async (evt) => {
		evt.preventDefault();
		// const firstName = evt.target.firstName.value;
		// const lastName = evt.target.lastName.value;
		// const address1 = evt.target.address1.value;
		// const address2 = evt.target.address2.value;
		// const city = evt.target.city.value;
		// // const state = evt.target.state.value;
		// const zipCode = evt.target.zipCode.value;
		// const phoneNumber = evt.target.phoneNumber.value;

		let formData = {}; //{"firstName": "abc", "lastName": "def", ...}

		for (const formField of evt.target) {
			// console.log(formField.id, formField.value);
			if (formField.id) {
				formData[formField.id] = formField.value;
			}
		}

		formData.zipCode = zipCode;

		if (formData.zipCode.length < 5) {
			alert("Yo! Your zip code is too short. Fix. It!");
		} else if (formData.phoneNumber.length < 10) {
			alert(
				"Your phone number is looking on the small side. You got enough digits?"
			);
		} else {
			const response = await fetch(`http://localhost:3001/customers`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					email: localStorage.email,
					password: localStorage.password,
				},
				body: JSON.stringify(formData),
			});

			// console.log(JSON.stringify(formData));

			const data = await response.json();

			if (data.error) {
				alert(data.error);
			} else {
				setCustomers(data.customers);
				table.current.scrollIntoView();

				for (const formField of evt.target) {
					formField.value = "";
				}
			}
		}
	};

	let paginationLis = [];
	if (totalPages) {
		for (let i = 1; i <= totalPages; i++) {
			paginationLis.push(
				<li
					className={`page-item ${currentPageNum === i ? "active" : ""}`}
					key={i}
					onClick={() => {
						setCurrentPageNum(i);
					}}
				>
					<span className="page-link">{i}</span>
				</li>
			);
		}
	}

	// search for frontend
	// const searchNames = (evt) => {
	// 	evt.preventDefault();
	// 	if (searchInput === "") {
	// 		setCustomers(allCustomers);
	// 	} else {
	// 		setCustomers(
	// 			allCustomers.filter((customer) => {
	// 				return (
	// 					customer.firstName
	// 						.toLowerCase()
	// 						.includes(searchInput.toLowerCase()) ||
	// 					customer.lastName.toLowerCase().includes(searchInput.toLowerCase())
	// 				);
	// 			})
	// 		);
	// 	}
	// };

	//backend search
	const searchNames = async (evt) => {
		evt.preventDefault();
		const response = await fetch(`http://localhost:3001/customersSearch`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ searchQuery: searchInput }),
		});
		const data = await response.json();
		setCustomers(data.customers);
	};

	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-3" style={{ paddingLeft: 0 }}>
						<Sidebar />
					</div>
					<div className="col-9">
						<div style={{ textAlign: "center" }}>
							<h3 style={{ textDecoration: "underline", fontWeight: 700 }}>
								Customers
							</h3>
						</div>
						<form
							className="row"
							style={{ marginTop: 10, marginBottom: 10 }}
							onSubmit={searchNames}
						>
							<div className="col-10">
								<input
									type="text"
									onChange={(evt) => {
										setSearchInput(evt.target.value);
									}}
									value={searchInput}
									className="form-control"
									placeholder="Search by name"
								/>
							</div>
							<div className="col-2">
								<button className="btn btn-primary" type="submit">
									Search
								</button>
							</div>
						</form>

						<div style={{ maxHeight: 350, overflow: "scroll" }}>
							<table
								className="table table-striped table-hover"
								style={{
									border: "1px solid black",
								}}
								ref={table}
							>
								<thead style={{ textAlign: "center" }}>
									<tr>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Phone</th>
										<th scope="col">Address</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody>
									{customers ? (
										customers.map((customer) => {
											return (
												<tr key={customer.customerID}>
													<td>{customer.firstName}</td>
													<td>{customer.lastName}</td>
													<td>{customer.phoneNumber}</td>
													<td>
														{customer.address1}
														{customer.address2
															? `, ${customer.address2}`
															: ""}, {customer.city}, {customer.state}{" "}
														{customer.zipCode}
													</td>
													<td>✏️&nbsp;&nbsp;&nbsp;🗑</td>
												</tr>
											);
										})
									) : (
										<tr>
											<td>Loading...</td>
										</tr>
									)}
									{/* <tr>
									<td>Testy</td>
									<td>McTesterson</td>
									<td>(123) 456-7890</td>
									<td>123 Main St, Syracuse, NY 123212</td>
									<td>✏️&nbsp;&nbsp;&nbsp;🗑</td>
								</tr>
								<tr>
									<td>Testy</td>
									<td>McTesterson</td>
									<td>(123) 456-7890</td>
									<td>123 Main St, Syracuse, NY 123212</td>
									<td>✏️&nbsp;&nbsp;&nbsp;🗑</td>
								</tr> */}
								</tbody>
							</table>
						</div>
						{totalPages < 2 ? null : (
							<nav aria-label="Page navigation">
								<ul className="pagination">
									<li
										className={`page-item ${
											currentPageNum === 1 ? "disabled" : ""
										}`}
									>
										<span
											className="page-link"
											onClick={() => {
												setCurrentPageNum(currentPageNum - 1);
											}}
										>
											Previous
										</span>
									</li>
									{paginationLis}
									<li
										className={`page-item ${
											currentPageNum === totalPages ? "disabled" : ""
										}`}
									>
										<span
											className="page-link"
											onClick={() => {
												setCurrentPageNum(currentPageNum + 1);
											}}
										>
											Next
										</span>
									</li>
								</ul>
							</nav>
						)}
						<div style={{ textAlign: "center" }}>
							<h4 style={{ textDecoration: "underline" }}>Add a Customer</h4>
						</div>
						<form onSubmit={addCustomer}>
							<div className="row">
								<div className="col">
									<div className="mb-3">
										<label htmlFor="firstName" className="form-label">
											First Name:
										</label>
										<input
											type="text"
											className="form-control"
											id="firstName"
											required
											tabIndex="1"
										/>
									</div>
								</div>
								<div className="col">
									<div className="mb-3">
										<label htmlFor="address1" className="form-label">
											Address 1:
										</label>
										<input
											type="text"
											className="form-control"
											id="address1"
											required
											tabIndex="4"
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="mb-3">
										<label htmlFor="lastName" className="form-label">
											Last Name
										</label>
										<input
											type="text"
											className="form-control"
											id="lastName"
											required
											tabIndex="2"
										/>
									</div>
								</div>
								<div className="col">
									<div className="mb-3">
										<label htmlFor="address2" className="form-label">
											Address 2:
										</label>
										<input type="text" className="form-control" id="address2" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="mb-3">
										<label htmlFor="phoneNumber" className="form-label">
											Phone Number:
										</label>
										<input
											type="text"
											className="form-control"
											id="phoneNumber"
											tabIndex="3"
											required
											onBlur={(evt) => {
												const num = evt.target.value.trim();
												if (num.length === 10) {
													evt.target.value = `(${num.substring(
														0,
														3
													)}) ${num.substring(3, 6)}-${num.substring(6)}`;
												}
											}}
										/>
									</div>
								</div>
								<div className="col-3">
									<div className="mb-3">
										<label htmlFor="city" className="form-label">
											City:
										</label>
										<input
											type="text"
											className="form-control"
											id="city"
											required
										/>
									</div>
								</div>
								<div className="col-3">
									<div className="mb-3">
										<label htmlFor="state" className="form-label">
											State:
										</label>
										<select
											className="form-select"
											defaultValue="NY"
											id="state"
											required
										>
											<option></option>
											<option>AL</option>
											<option>AK</option>
											<option>AZ</option>
											<option>AR</option>
											<option>CA</option>
											<option>CO</option>
											<option>CT</option>
											<option>DE</option>
											<option>FL</option>
											<option>GA</option>
											<option>HI</option>
											<option>ID</option>
											<option>IL</option>
											<option>IN</option>
											<option>IA</option>
											<option>KS</option>
											<option>KY</option>
											<option>LA</option>
											<option>ME</option>
											<option>MD</option>
											<option>MA</option>
											<option>MI</option>
											<option>MN</option>
											<option>MS</option>
											<option>MO</option>
											<option>MT</option>
											<option>NE</option>
											<option>NV</option>
											<option>NH</option>
											<option>NJ</option>
											<option>NM</option>
											<option>NY</option>
											<option>NC</option>
											<option>ND</option>
											<option>OH</option>
											<option>OK</option>
											<option>OR</option>
											<option>PA</option>
											<option>RI</option>
											<option>SC</option>
											<option>SD</option>
											<option>TN</option>
											<option>TX</option>
											<option>UT</option>
											<option>VT</option>
											<option>VA</option>
											<option>WA</option>
											<option>WV</option>
											<option>WI</option>
											<option>WY</option>
										</select>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-9"></div>
								<div className="col">
									<div className="mb-3">
										<label htmlFor="zipCode" className="form-label">
											Zip Code:
										</label>
										<input
											type="text"
											className="form-control"
											id="zipCode"
											required
											value={zipCode}
											onChange={(evt) => {
												setZipCode(evt.target.value);
											}}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col text-center">
									<button type="submit" className="btn btn-primary">
										Add Customer
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customers;

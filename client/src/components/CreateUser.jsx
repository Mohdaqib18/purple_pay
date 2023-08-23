import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
	const [name, setName] = useState();
	const [dob, setDob] = useState();
	const [nationality, setNationality] = useState();
	const [voterId, setVoterId] = useState();
	const navigate = useNavigate();

	const submit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/users", {
				name,
				dob,
				nationality,
				voterId,
			})
			.then((result) => {
				console.log(result);
				navigate("/");
			})
			.catch((err) => console.log(err));
	};



	return (
		<div className="d-flex vh-100 bg-light justify-content-center align-items-center">
			<div className="w-50 bg-white rounded p-3">
				<form onSubmit={submit}>
					<h2>Add User</h2>
					<div className="mb-2">
						<label htmlFor="">Name</label>
						<input
							type="text"
							placeholder="Enter Name"
							className="form-control"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="">Date of Birth</label>
						<input
							type="date"
							placeholder="Enter Date of Birth"
							className="form-control"
							onChange={(e) => setDob(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="">Nationality</label>
						<input
							type="text"
							placeholder="Enter Nationality"
							className="form-control"
							onChange={(e) => setNationality(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="">Voter Id</label>
						<input
							type="number"
							placeholder="Enter Voter Id"
							className="form-control"
							onChange={(e) => setVoterId(e.target.value)}
						/>
					</div>
					<button className="btn btn-success">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default CreateUser;

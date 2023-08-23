import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
	const [name, setName] = useState();
	const [dob, setDob] = useState();
	const [nationality, setNationality] = useState();
	const [voterId, setVoterId] = useState();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/users/${id}`)
			.then((result) => {
				setName(result.data.name);
				setDob(result.data.dob);
				setNationality(result.data.nationality);
				setVoterId(result.data.voterId);
			})
			.catch((error) => console.log(error));
	}, []);

 const update = (e) => {
	e.preventDefault();
	axios
		.put(`http://localhost:8080/users/${id}`, { name, dob, nationality, voterId })
		.then((result) => {
			console.log(result);
			navigate("/");
		})
		.catch((err) => console.log(err));
 }
console.log(dob)
	return (
		<div className="d-flex vh-100 bg-light justify-content-center align-items-center">
			<div className="w-50 bg-white rounded p-3">
				<form onSubmit={update}>
					<h2>Update User</h2>
					<div className="mb-2">
						<label htmlFor="">Name</label>
						<input
							type="text"
							placeholder="Enter Name"
							className="form-control"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="">Date of Birth</label>
						<input
							type="date"
							placeholder="Enter Date of Birth"
							className="form-control"
							value={dob?.split("T", 1)}
							onChange={(e) => setDob(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="">Nationality</label>
						<input
							type="text"
							placeholder="Enter Nationality"
							className="form-control"
							value={nationality}
							onChange={(e) => setNationality(e.target.value)}
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="">Voter Id</label>
						<input
							type="number"
							placeholder="Enter Voter Id"
							className="form-control"
							value={voterId}
							onChange={(e) => setVoterId(e.target.value)}
						/>
					</div>
					<button className="btn btn-success">Update</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateUser;

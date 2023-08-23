import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8080/users")
			.then((result) => setUsers(result.data))
			.catch((error) => console.log(error));
	}, []);

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:8080/users/${id}`)
			.then((res) => {
				console.log(res);
				window.location.reload();
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="d-flex vh-100 bg-light justify-content-center align-items-center">
			<div className="w-100 bg-white rounded p-3">
		<h3> Please don't delete the entry with name Mohd Aqib</h3>
				<Link to="/create" className="btn btn-success">
					Add +
				</Link>

				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Date of Birth</th>
							<th>Nationality</th>
							<th>Voter ID</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{users.map((user, i) => {
							return (
								<tr key={i}>
									<td>{user.name}</td>
									<td>{user.dob.split("T", 1)}</td>
									<td>{user.nationality}</td>
									<td>{user.voterId}</td>
									<td>
										<Link
											to={`/update/${user._id}`}
											className="btn btn-success"
										>
											Update
										</Link>
										<button
											className="btn btn-danger"
											onClick={(e) => handleDelete(user._id)}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;

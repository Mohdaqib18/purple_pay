import User from "../mongodb/models/user.js";

const getAllUsers = async (req, res) => {
	User.find({})
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
};
const createUser = async (req, res) => {
	try {
		const { name, dob, nationality, voterId } = req.body;
		const newUser = await User.create({
			name,
			dob,
			nationality,
			voterId,
		});

		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const getUserInfoByID = async (req, res) => {
	const id = req.params.id;

	User.findById({ _id: id })
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
};
const updateUser = async (req, res) => {
	const id = req.params.id;
	User.findByIdAndUpdate(
		{ _id: id },
		{
			name: req.body.name,
			dob: req.body.dob,
			nationality: req.body.nationality,
			voterId: req.body.voterId,
		}
	)
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
};
const deleteUser = async (req, res) => {
	const id = req.params.id;
	User.findByIdAndDelete(
		{ _id: id },
	
	)
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
};

export { getAllUsers, createUser, getUserInfoByID, updateUser, deleteUser };

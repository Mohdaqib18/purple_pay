import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	dob: { type: Date, required: true },
	nationality: { type: String, required: true },
	voterId: { type: Number, required: true },
});

const userModel = mongoose.model("User", UserSchema);
export default userModel;

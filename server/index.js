import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import userModel from "./mongodb/models/user.js";
import userRouter from "./routes/user.routes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);


// app.post("/createUser", (req, res) => {
// 	userModel
// 		.create(req.body)
// 		.then((users) => res.json(users))
// 		.catch((err = res.json(err)));
// });
const startServer = async () => {
	try {
		connectDB(process.env.MONGODB_URL);
		app.listen(8080, () => {
			console.log("Server has started Running on http://localhost:8080");
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();

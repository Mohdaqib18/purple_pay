import express from "express";

import {
	createUser,
	getAllUsers,
	getUserInfoByID,
	updateUser,
	deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUserInfoByID);

router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);
export default router;

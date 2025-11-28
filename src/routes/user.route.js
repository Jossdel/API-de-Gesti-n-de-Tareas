import { Router } from "express";
import {
  createUser,
  findUser,
  deleteUser,
  updateUser,
  GetAllUsers,
} from "../controller/user.controller.js";
export const router = Router();

router.get("/user/:id", findUser);
router.get("/users", GetAllUsers);
router.post("/createuser", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

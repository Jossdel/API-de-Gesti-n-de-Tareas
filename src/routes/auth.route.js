import { Router } from "express";
import { login, register } from "../controller/auth.controller.js";

export const router = Router();

router.post("/api/login", login);
router.post("/api/register", register);

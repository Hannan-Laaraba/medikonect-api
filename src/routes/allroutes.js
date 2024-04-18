import { Router } from "express";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

// Define routes
router.post ('/signup', signup);

router.post ('/login', login);

export default router;
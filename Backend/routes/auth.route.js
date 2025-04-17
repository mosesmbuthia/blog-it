import { Router} from 'express';
import validation from '../middlewares/validation.js';
import { signup, login } from '../controllers/auth.controllers.js';

const router = Router();

router.route("/signup").post(validation, signup);

router.route("/login").post(login);

export default router;
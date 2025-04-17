import { Router} from 'express';
import { createBlog } from '../controllers/blog.entries.controllers.js';
import verifyUser from '../middlewares/verifyUser.js';

const router = Router()
router.route("/blogs").post(verifyUser,createBlog);

export default router;
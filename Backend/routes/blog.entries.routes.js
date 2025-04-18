import { Router} from 'express';
import { createBlog } from '../controllers/blog.entries.controllers.js';
import verifyUser from '../middlewares/verifyUser.js';
import { getBlogById} from '../controllers/blog.entries.controllers.js'

const router = Router()
router.route("/blogs").post(verifyUser,createBlog);
router.get('/blogs/:id', getBlogById);

export default router;
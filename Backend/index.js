import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import blogsEntriesRouter from './routes/blog.entries.routes.js'



const blog = express();

dotenv.config();

blog.use(express.json());
blog.use(cookieParser());

blog.use(cors({

    origin: "http://localhost:5174",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}))

blog.use("/auth", authRoutes);
blog.use("/", blogsEntriesRouter);



export default blog;
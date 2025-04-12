import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const blog = express();
const client = new PrismaClient();

blog.use(express.json())

blog.post("/auth/signup", async (req, res) => {
    const { firstName, lastName, emailAddress, userName, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        const newUser = await client.user.create({
            data: {
                firstName,
                lastName,
                emailAddress,
                userName,
                password: hashedPassword
            }
        })
        res.status(201).json({
            status: "Success",
            message: "New user created successfully",
            data: newUser
        })

    } catch(error) {
        console.error("Error signing up:", error);
        res.status(500).json({
            status: "error",
            message: "Something went wrong"
        })

    }
});

const port = process.env.PORT || 4000;
blog.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
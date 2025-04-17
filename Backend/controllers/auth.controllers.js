import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const client = new PrismaClient();

export const signup = async (req, res) => {
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

    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({
            status: "error",
            message: "Something went wrong"
        })

    }
}

export const login = async (req, res) => {
    try {
        const { identifier, password } = req.body;
        const user = await client.user.findFirst({
            where: {
                OR: [{ emailAddress: identifier }, { userName: identifier }]
            }
        });
        if (!user) {
            return res.status(401).json({
                status: "Error",
                message: "Wrong username/email or password"
            });

        }
        const isMatching = await bcrypt.compare(password, user.password);

        if (!isMatching) {
            return res.status(401).json({
                status: "Error",
                message: "Wrong username/email or password"
            });
        }
        const jwtPayload = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName
        }
        const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY, {
            expiresIn: '1d',
        });


        res.status(200).cookie("blogitAuthToken", token, {
            httpOnly: true,   
            secure: false,    
            sameSite: "strict",  
            maxAge: 24 * 60 * 60 * 1000
        }).json({
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                emailAddress: user.emailAddress,
                userName: user.userName
            }
        })


    } catch (error) {
        console.error("Error logging in", error);
        res.status(500).json({
            status: "error",
            message: "something went wrong"
        })
    }

}
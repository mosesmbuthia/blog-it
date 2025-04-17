import { PrismaClient} from '@prisma/client';
const client = new PrismaClient();

export const createBlog = async (req, res) => {
    try {
        const authorId = req.user.id;
        const {title, description, body} = req.body;
        const newBlog = await client.blog.create({
            data: {
                title, description, body,authorId
            }
        })
        
        res.status(201).json({
            message: "New blog created succesfully"
        })
       
    } catch(e) {
        res.status(500).json({
            message: "Something went wrong"
        });

    }
}
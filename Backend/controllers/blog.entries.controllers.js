import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();

export const createBlog = async (req, res) => {
    try {
        const authorId = req.user.id;
        const { title, description, body } = req.body;
        const newBlog = await client.blog.create({
            data: {
                title, description, body, authorId
            }
        })

        res.status(201).json({
            message: "New blog created succesfully"
        })

    } catch (e) {
        res.status(500).json({
            message: "Something went wrong"
        });

    }
}

export const getBlogById = async (req, res) => {
    const blogId = req.params.id;

    try {
        
        const blog = await prisma.blog.findUnique({
            where: { id: blogId },
        });

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(blog);
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).json({ message: "Server error" });
    }
};

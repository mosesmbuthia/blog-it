import jwt from 'jsonwebtoken';

function verifyUser(req, res, next) {
    const {blogitAuthToken} = req.cookies
    if (!blogitAuthToken) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    jwt.verify(blogitAuthToken, process.env.JWT_SECRET_KEY, (err, data) => {
        if (err) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        } else {
            req.user = data;
            next();
        }
    })
}

export default verifyUser
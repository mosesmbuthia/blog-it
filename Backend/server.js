import blog from './index.js';

const port = process.env.PORT || 4000;
blog.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
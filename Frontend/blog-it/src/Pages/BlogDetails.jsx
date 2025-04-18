import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Markdown from 'react-markdown';
import { Box, Typography } from '@mui/material';

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/blogs/${blogId}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [blogId]);

  if (!blog) return <Typography>Loading blog...</Typography>;

  return (
    <Box maxWidth="800px" mx="auto" mt={4} p={3} bgcolor="#fff" borderRadius="12px">
      <Typography variant="h3" fontWeight="bold" mb={2}>{blog.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={2}>{blog.description}</Typography>
      <Markdown>{blog.body}</Markdown>
    </Box>
  );
};

export default BlogDetails;

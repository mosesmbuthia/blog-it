import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';
import sampleBlogs from '../Components/SampleBlogs.js';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '900px',
  margin: '40px auto',
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const FeaturedImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  marginBottom: '24px',
});

const ArticlePage = () => {
  const { id } = useParams();

 
  const blog = sampleBlogs.find((b) => b.id === id);

  if (!blog) {
    return <Typography variant="h5">Blog not found</Typography>;
  }

  const formattedDate = new Date(blog.updatedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Container>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        {blog.title}
      </Typography>

      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Avatar>{blog.author.username.charAt(0).toUpperCase()}</Avatar>
        <Box>
          <Typography variant="subtitle2">{blog.author.username}</Typography>
          <Typography variant="caption" color="text.secondary">{formattedDate}</Typography>
        </Box>
      </Box>

      <FeaturedImage src={blog.featuredImage} alt="Blog cover" />

      <Box>
        <ReactMarkdown>{blog.body}</ReactMarkdown>
      </Box>
    </Container>
  );
};

export default ArticlePage;

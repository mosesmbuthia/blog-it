import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import BlogCard from '../Components/BlogCard.jsx';

const BlogListingContainer = styled(Box)({
    minHeight: '100vh',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  const sampleBlogs = [
    {
      id: 1,
      featuredImage: 'https://via.placeholder.com/350x200?text=Blog+1',
      excerpt: 'This is an exciting blog post about technology and innovation. Dive in to learn more!',
      author: {
        username: 'john_doe',
        avatar: 'https://via.placeholder.com/40?text=JD',
      },
      updatedAt: '2025-04-01',
    },
    {
      id: 2,
      featuredImage: 'https://via.placeholder.com/350x200?text=Blog+2',
      excerpt: 'A deep dive into the world of creative writing and storytelling.',
      author: {
        username: 'jane_smith',
        avatar: null,
      },
      updatedAt: '2025-04-02',
    },
    {
      id: 3,
      featuredImage: 'https://via.placeholder.com/350x200?text=Blog+3',
      excerpt: 'Exploring the latest trends in web development and design.',
      author: {
        username: 'alex_brown',
        avatar: 'https://via.placeholder.com/40?text=AB',
      },
      updatedAt: '2025-04-03',
    },
  ];


function BlogListing() {


  return (
    <BlogListingContainer>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        Discover Inspiring and Exciting Stories on BlogIt
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {sampleBlogs.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </BlogListingContainer>
  )
}

export default BlogListing

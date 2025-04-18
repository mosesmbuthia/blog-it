import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import BlogCard from '../Components/BlogCard';
import sampleBlogs from '../Components/SampleBlogs.js';
import { Link } from 'react-router-dom';

const BlogListingContainer = styled(Box)({
  minHeight: '100vh',
  padding: '40px 20px',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const BlogSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '1400px',
  gap: '32px',
  justifyContent: 'space-between',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
  },
});

const MainBlogGrid = styled(Grid)({
  flex: 7,
});

const TrendingSidebar = styled(Box)({
  flex: 3,
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
  height: 'fit-content',
});

const BlogListing = () => {
  const trendingBlogs = sampleBlogs.slice(0, 3);

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
          marginBottom: '60px',
          textAlign: 'center',
        }}
      >
        Discover Stories on BlogIt
      </Typography>

      <BlogSection>
        {/* Main Blog Cards */}
        <MainBlogGrid container spacing={4}>
          {sampleBlogs.map((blog) => (
            <Grid item xs={12} sm={6} md={6} key={blog.id}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </MainBlogGrid>

        {/* Trending Blogs */}
        <TrendingSidebar>
          <Typography variant="h6" fontWeight={700} mb={2}>
            🔥 Trending Blogs
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {trendingBlogs.map((blog) => (
            <Box key={blog.id} mb={3}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{ color: '#6B48FF', textDecoration: 'none' }}
                component={Link}
                to={`/blog/${blog.id}`}
              >
                {blog.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                by {blog.author.username}
              </Typography>
            </Box>
          ))}
        </TrendingSidebar>
      </BlogSection>
    </BlogListingContainer>
  );
};

export default BlogListing;

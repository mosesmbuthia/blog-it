import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import PushPinIcon from '@mui/icons-material/PushPin';

const StyledCard = styled(Card)({
  display: 'flex',
  
  padding: '16px',
  borderRadius: '12px',
  boxShadow: 'none',
  border: '1px solid #eee',
  backgroundColor: '#fff',
  alignItems: 'flex-start',
});

const InfoBox = styled(Box)({
  flex: 1,
  marginRight: '16px',
});

const ImageBox = styled('img')({
  width: '120px',
  height: '80px',
  borderRadius: '8px',
  objectFit: 'cover',
});

const BottomBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '12px',
});

const BlogCard = ({ blog }) => {
  const {
    id,
    title,
    excerpt,
    featuredImage,
    author,
    updatedAt,
    isPinned = false,
  } = blog;

  const formattedDate = new Date(updatedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
   
     <StyledCard>
      <InfoBox>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Avatar src={author.avatar || undefined} sx={{ width: 28, height: 28 }} />
          <Typography variant="body2" color="text.primary" fontWeight={500}>
            {author.username}
          </Typography>
        </Box>

        <Typography
          component={Link}
          to={`/blog/${id}`}
          variant="h6"
          color="text.primary"
          sx={{ fontWeight: 700, textDecoration: 'none' }}
        >
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {excerpt}
        </Typography>

        <BottomBox>
          <Typography variant="caption" color="text.secondary">
            {formattedDate}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            {isPinned && (
              <Tooltip title="Pinned Blog">
                <PushPinIcon fontSize="small" color="primary" />
              </Tooltip>
            )}
            <Button
              variant="contained"
              size="small"
              component={Link}
              to={`/blog/${id}`}
              sx={{
                textTransform: 'none',
                borderRadius: '20px',
                paddingX: 2,
                background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #5a3de6 30%, #00c4d4 90%)',
                },
              }}
            >
              Read Blog
            </Button>
          </Box>
        </BottomBox>
      </InfoBox>

      <ImageBox
        src={featuredImage || 'https://via.placeholder.com/120x80?text=Image'}
        alt="Featured"
      />
    </StyledCard>
   
  );
};

export default BlogCard;

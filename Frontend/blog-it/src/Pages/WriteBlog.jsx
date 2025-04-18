import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import Markdown from 'react-markdown';
import { useMutation} from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '40px auto',
  padding: theme.spacing(3),
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const StyledButton = styled(Button)({
  marginTop: '24px',
  padding: '10px 32px',
  borderRadius: '25px',
  background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(45deg, #5a3de6 30%, #00c4d4 90%)',
  },
});

const WritePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const { isPending, mutate} = useMutation({
    mutationKey: ["create-blog"],
    mutationFn: async() => {
     const response = await axios.post(`http://localhost:4000/blogs`, {title,description,body}, {withCredentials: true})
     return response.data;
    },
    onSuccess: (data) => {
      navigate(`/blogs/${data.id}`);
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        const serverMessage = err.response.data.message;
        setFormError(serverMessage);
    } else {
      setFormError("Something went wrong")
    }
  }
  })


  const handleCreateBlog = (e) => {
    e.preventDefault();
    setFormError(null);
    console.log({ title, description, body });
    if (!title || !description || !body ) {
      setFormError("All fields are required");
      return;
    }
    mutate();
  };

  return (
    <Container component="form" onSubmit={handleCreateBlog}>
     
      <Typography variant="h4" fontWeight="bold" mb={2}>
        New Blog
      </Typography>
      {formError && <Alert severity='error'> {formError} </Alert>}
      <TextField
        label="Title *"
        fullWidth
       
        sx={{ mb: 3 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        label="Description *"
        fullWidth
        
        multiline
        rows={3}
        sx={{ mb: 3 }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Body (Markdown supported) *
      </Typography>
      <TextField
        placeholder="Write your blog content here..."
        multiline
        rows={10}
        fullWidth
        variant="outlined"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Typography variant="subtitle1" fontWeight="bold" mt={4}>
        Preview
      </Typography>
      <Box
        p={2}
        border="1px solid #ccc"
        borderRadius="8px"
        minHeight="200px"
        sx={{ backgroundColor: "#f9f9f9", mt: 1 }}
      >
        <Markdown>{body}</Markdown>
      </Box>

      <StyledButton type="submit" disabled={isPending}> 
        {
        isPending ? "Please wait ..." : "Submit"
        } 
        </StyledButton>
    </Container>
  );
};

export default WritePage;

import React from 'react'

import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

function Signup() {

    const SignUpContainer = styled(Box)({
        minHeight: '100vh',
        minWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Soft gradient background
        padding: '20px',
      });
      
      const StyledPaper = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(4),
        borderRadius: '15px',
        maxWidth: '500px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }));
      
      const StyledTextField = styled(TextField)(({ theme }) => ({
        marginBottom: theme.spacing(2),
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          '&:hover fieldset': {
            borderColor: '#6B48FF',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6B48FF',
          },
        },
      }));
      
      const StyledButton = styled(Button)(({ theme }) => ({
        marginTop: theme.spacing(1),
        padding: theme.spacing(1.5, 4),
        borderRadius: '25px',
        background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
          background: 'linear-gradient(45deg, #5a3de6 30%, #00c4d4 90%)',
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out',
        },
      }));


  return (

    <SignUpContainer>
      <StyledPaper elevation={2}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Join a Community of Readers and Writers
        </Typography>
        {/* <Typography
          variant="body1"
          sx={{ color: '#666', mb: 3 }}
        >
          Create your BlogIt account and start sharing your stories today!
        </Typography> */}

        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="First Name"
                name="firstName"
               
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Last Name"
                name="lastName"
                
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Username"
                name="username"
                
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Password"
                name="password"
                type="password"
               
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                
                required
              />
            </Grid>
          </Grid>

          <StyledButton type="submit">
            Create Account
          </StyledButton>
        

        <Typography
          variant="body2"
          sx={{ mt: 2, color: '#666' }}
        >
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#6B48FF', textDecoration: 'none' }}>
            Log in
          </Link>
        </Typography>
      </StyledPaper>
    </SignUpContainer>
  )
}

export default Signup

import React from 'react'
import { Typography, TextField, Paper } from '@mui/material';
import { styled } from '@mui/material';
function Login() {
    const StyledPaper = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(4),
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px',
        margin: theme.spacing(2),
    }));
    return (
        <StyledPaper>
            <Typography >
                Welcome Back! <br />
                <TextField
                    variant='outlined'
                    required
                    label="First Name"
                ></TextField>

                <TextField
                    variant='outlined'
                    required
                    label="Last Name"
                ></TextField>

                <TextField
                    variant='outlined'
                    required
                    label="Email Address"
                ></TextField>


            </Typography>

        </StyledPaper>

    )
}

export default Login

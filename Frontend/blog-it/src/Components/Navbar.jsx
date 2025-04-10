import React from 'react'
import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';
function Navbar() {
    const StyledAppBar = styled(AppBar)(({ theme }) => ({
        background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
        boxShadow: '0 3px 5px 2px rgba(107, 72, 255, .3)',
    }));

    const Logo = styled('img')({
        height: '40px',
        marginRight: '16px',
        borderRadius: '5px',
        overflow: 'hidden'
    });

    const StyledButton = styled(Button)(({ theme }) => ({
        margin: theme.spacing(0, 1),
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
        color: '#fff',
        borderRadius: '25px',
        padding: '6px 20px',
    }));
    return (
        


            <StyledAppBar position="static">
                <Toolbar>
                   
                    <Logo
                        src="https://assets.grok.com/users/9e145854-1ec4-49e9-8f53-03a8a858280c/generated/wAbW6W84WK7SjKbx/image.jpg"
                        alt="Blogit Logo"
                        
                    />

                   
                    <Typography
                        variant="h5"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            '&:hover': {
                                color: '#f0f0f0'
                            }
                        }}
                    >
                        Blogit
                    </Typography>

                 
                    <Box>
                    <StyledButton
                            component={Link}
                            to="/about"
                            color='secondary'
                        >
                            Our Story
                        </StyledButton>

                        <StyledButton
                            component={Link}
                            to="/login"
                            color='warning'
                        >
                            Login
                        </StyledButton>
                        <StyledButton
                            component={Link}
                            to="/signup"
                            variant="contained"
                        >
                            Sign Up
                        </StyledButton>
                    </Box>
                </Toolbar>
            </StyledAppBar>
            );
};
        
    


export default Navbar

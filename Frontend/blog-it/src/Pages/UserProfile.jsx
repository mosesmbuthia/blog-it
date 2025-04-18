import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  styled,
} from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height:'100vh',
  margin: '40px auto',
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
}));

const StyledButton = styled(Button)({
  marginTop: '24px',
  borderRadius: '25px',
  padding: '10px 30px',
  fontWeight: 'bold',
  background: 'linear-gradient(45deg, #6B48FF 30%, #00DDEB 90%)',
  color: '#fff',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(45deg, #5a3de6 30%, #00c4d4 90%)',
  },
});



const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    profilePhoto: '',
    phone: '',
    occupation: '',
    bio: '',
    status: '',
    secondaryEmail: '',
  });

  const [previewPhoto, setPreviewPhoto] = useState(null);

  
  useEffect(() => {
    
    const existingData = {
      profilePhoto: '',
      phone: '123-456-7890',
      occupation: 'Frontend Developer',
      bio: 'Building UIs and sipping coffee ☕',
      status: 'Available for freelance',
      secondaryEmail: 'me@example.com',
    };
    setProfileData(existingData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewPhoto(URL.createObjectURL(file));
      setProfileData((prev) => ({
        ...prev,
        profilePhoto: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Updated Profile:', profileData);
    alert('Profile updated successfully!');
  };

  return (
    <Container>
        
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        My Profile
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Update your profile, personal info, and password.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
        
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Profile Photo
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                src={previewPhoto}
                sx={{ width: 64, height: 64 }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              label="Phone Number"
              value={profileData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="occupation"
              label="Occupation"
              value={profileData.occupation}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="bio"
              label="Bio"
              value={profileData.bio}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="status"
              label="Status Text"
              value={profileData.status}
              onChange={handleChange}
              fullWidth
              placeholder="E.g. Open for work, Studying, etc."
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="secondaryEmail"
              label="Secondary Email Address"
              value={profileData.secondaryEmail}
              onChange={handleChange}
              fullWidth
              type="email"
              helperText="Must be unique if provided"
            />
          </Grid>
        </Grid>

        <StyledButton type="submit">Save Changes</StyledButton>
      </form>
      
    </Container>
  );
};

export default UserProfile;

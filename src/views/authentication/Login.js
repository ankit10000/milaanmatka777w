import React from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  TextField,
  Paper,
  Container
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log('Login attempt:', { username, password });

    if (username === 'matkaadmin777' && password === 'matkaadmin777') {
      alert('Login successful');
      // Navigate to admin dashboard
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  React.useEffect(() => {
    console.log('Login component mounted');
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 2
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          <Box textAlign="center" mb={3}>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              color="primary"
              gutterBottom
            >
              Admin Login
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Welcome back! Please sign in to continue.
            </Typography>
          </Box>

          <form onSubmit={handleLogin}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                variant="outlined"
                required
                placeholder="Enter username"
                defaultValue="matkaadmin777"
              />
              
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                required
                placeholder="Enter password"
                defaultValue="matkaadmin777"
              />

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember this device"
                />
              </FormGroup>

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
                  }
                }}
              >
                Sign In
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
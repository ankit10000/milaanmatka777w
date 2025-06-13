import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/auth'; // Adjust the import path as necessary

function Login() {
  const navigate = useNavigate();
  
 const handleLogin = (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  if (username === 'matkaadmin777' && password === 'matkaadmin777') {
    login(); // Set authentication
    alert('Login successful');
    navigate('/dashboard', { replace: true });
  } else {
    alert('Invalid credentials');
  }
};

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: '#f5f5f5'
    }}>
      <Box sx={{ 
        maxWidth: 400, 
        width: '100%',
        mx: 'auto', 
        p: 3, 
        boxShadow: 3, 
        borderRadius: 2,
        bgcolor: 'white'
      }}>
        <Typography variant="h5" fontWeight={600} mb={3} align="center">
          Admin Login
        </Typography>
        <form onSubmit={handleLogin} noValidate>
          <Stack spacing={3}>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="username"
                mb="5px"
                display="block"
              >
                Username
              </Typography>
              <TextField 
                id="username" 
                name="username" 
                variant="outlined" 
                fullWidth 
                required
                placeholder="Enter username"
              />
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="password"
                mb="5px"
                display="block"
              >
                Password
              </Typography>
              <TextField 
                id="password" 
                name="password" 
                type="password" 
                variant="outlined" 
                fullWidth 
                required
                placeholder="Enter password"
              />
            </Box>
            <Stack justifyContent="space-between" direction="row" alignItems="center">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember this device"
                />
              </FormGroup>
            </Stack>
            <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              type="submit"
            >
              Sign In
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
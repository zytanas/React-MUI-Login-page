import { Grid, Paper, TextField, Button, InputAdornment, Box, Stack } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import Logo from '../components/nms-logo/nms.png'
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleUsernameChange = (event) => {
    const value = event.target.value.trim();
    setUsername(value);
    setUsernameError(false);
    const re = /^[a-zA-Z0-9_]+$/;
    if (value === '') {
      setUsernameError(true);
    } else if (value.length < 3 || value.length > 8) {
      setUsernameError(true);
    } else if (!re.test(value)) {
      setUsernameError(true);
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value.trim();
    setPassword(value);
    setPasswordError(false);
    if (value === '') {
      setPasswordError(true);
    } else if (value.length < 3 || value.length > 8) {
      setPasswordError(true);
    }
  };

  const handleUsernameBlur = () => {
    setUsernameTouched(true);
    if (username.trim() === '') {
      setUsernameError(true);
    }
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    if (password.trim() === '') {
      setPasswordError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate username and password
    const re = /^[a-zA-Z0-9_]+$/;
    setUsernameError(
      username.trim() === '' ||
      username.length < 3 ||
      username.length > 8 ||
      !re.test(username)
    );
    setPasswordError(
      password.trim() === '' ||
      password.length < 3 ||
      password.length > 8
    );

    // Submit the form if there are no errors
    if (!usernameError && !passwordError) {
      console.log('Submitting form...');
    }
  };


  return (
    <Box sx={{ bgcolor: '#262626', height: '100vh', width: '100vw' }}
      noValidate
      autoComplete="off">
      <Grid>
        <Paper elevation={1} sx={{ padding: 15, height: '40vh', width: 350, borderRadius: '16px', border: 2, borderColor: 'borderColor.main', margin: 'auto', backgroundColor: '#191e33' }}>
          <Grid align='center'>
            <img src={Logo} alt={Logo} width="120px" />
            <h2>NMS Kitchen Inventory System</h2>
            <h4 >SIGN IN</h4>
          </Grid >
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label='Username'
                value={username}
                onChange={handleUsernameChange}
                onBlur={handleUsernameBlur}
                error={usernameError}
                helperText={
                  usernameError
                    ? (usernameTouched ? 'Username is required and must be 3-8 characters long, and can only contain letters, numbers, and underscores' : 'Required')
                    : ''
                }

                sx={{ bgcolor: "#24262e" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}

                fullWidth
                required />

              <TextField
                label='Password'
                type='password'
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                error={passwordError}
                helperText={
                  passwordError
                    ? (passwordTouched ? 'Password is required and must be 3-8 characters long' : 'Required')
                    : ''
                }
                sx={{ bgcolor: "#24262e" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                required />

              <Button type='submit' variant='contained' fullWidth
                sx={{
                  fontWeight: 'bold',
                  bgcolor: '#7a0702', ":hover": {
                    bgcolor: "#450c0a",
                    color: "white"
                  }
                }}>
                Log In <LoginIcon />
              </Button>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </Box>
  )
}
export default Login;
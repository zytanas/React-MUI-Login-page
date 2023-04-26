import React from 'react'
import { Grid, Paper, TextField, Button, InputAdornment,Typography, Avatar, Box, Stack} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';

const Login = () => {
    const paperStyle = { padding: 40, height: '45vh', width: 350, borderRadius: '16px', borderColor:'borderColor.main',margin: 'auto', backgroundColor: '#191e33' }
    
    
    return (
        <Box sx={{ bgcolor: '#262626', height: '100vh', width: '100vw' }}>
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                <Avatar  variant='square' src='https://newmediaservices.com.au/wp-content/uploads/2019/02/NMS-LOGO-HD-2014_1.png'sx={{ width: 130, height: 56 }}>     
                </Avatar>
                    <h2>Welcome to NMS Kitchen Inventory System</h2>
                    <h4 >SIGN IN</h4>
                </Grid >
                <Stack spacing={2}>
                <TextField
                label='Username' 
                sx={{bgcolor:"#24262e"}}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon />
                      </InputAdornment>
                    ),
                  }} 
                fullWidth />
                
                <TextField
                label='Password' 
                type='password' 
                sx={{bgcolor:"#24262e"}} 
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    ),
                  }} 
                fullWidth 
                required />
                
                <Button type='submit' variant='contained'fullWidth 
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
                <Typography textAlign="center" fontSize={'14px'}>
                </Typography>
            </Paper>
        </Grid>
        </Box>
    )
}

export default Login
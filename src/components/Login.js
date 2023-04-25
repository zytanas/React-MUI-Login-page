import React from 'react'
import { Grid, Paper, TextField, Divider, Button, Typography, Avatar, Box} from '@mui/material'
const Login = () => {
    const paperStyle = { padding: 40, height: '35vh', width: 350, borderRadius: '16px', margin: 'auto', backgroundColor: '#191e33' }
    
    
    return (
        <Box sx={{ bgcolor: '#262626', height: '100vh', width: '100vw' }}>
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                <Avatar  variant='square' src='https://newmediaservices.com.au/wp-content/uploads/2019/02/NMS-LOGO-HD-2014_1.png'sx={{ width: 130, height: 56 }}>     
                </Avatar>
        
                    <h2 >SIGN IN</h2>
                </Grid>
                <TextField placeholder='Username' sx={{bgcolor:"#24262e"}} fullWidth required />
                <Divider />
                <Divider />
                <Divider />
                <TextField placeholder='Password' type='password' sx={{bgcolor:"#24262e"}} fullWidth required />

                <Button type='submit' variant='contained'fullWidth 
                sx={{
                    fontWeight: 'bold',
                    bgcolor: '#1A4D2E', ":hover": {
                        bgcolor: "#7a0702",
                        color: "white"
                    }
                }}>
                    Log In
                </Button>

                <Typography textAlign="center" fontSize={'14px'}>
                </Typography>
            </Paper>
        </Grid>
        </Box>
    )
}

export default Login
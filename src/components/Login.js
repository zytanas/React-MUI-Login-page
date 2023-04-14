import React from 'react'
import { Grid, Paper, TextField, Divider, Button, Typography, Avatar, Box} from '@mui/material'
import SignUp from './SignUp'
const Login = () => {
    const paperStyle = { padding: 40, height: '40vh', width: 350, borderRadius: '16px', margin: 'auto', backgroundColor: 'maroon' }
    const avatarStyle = { backgroundColor: 'maroon'}
    const btnStyle = { margin: '8px 0', fontWeight:600, backgroundColor: '#e00202', color: 'white' }
    const tfStyle = { backgroundColor: '#ededed',borderRadius: '16px' }
    const h2Style={color:'white'}
    
    return (
        <Box sx={{ bgcolor: '#262626', height: '100vh', width: '100vw' }}>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle} variant='square' src='https://newmediaservices.com.au/wp-content/uploads/2019/02/NMS-LOGO-HD-2014_1.png'sx={{ width: 130, height: 56 }}>     
                </Avatar>
        
                    <h2 style={h2Style}>SIGN IN</h2>
                </Grid>
                <TextField placeholder='Username' style={tfStyle} fullWidth required />
                <Divider />
                <Divider />
                <Divider />
                <TextField placeholder='Password' style={tfStyle} type='password' fullWidth required />

                <Button type='submit' variant='contained' style={btnStyle} fullWidth  >
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
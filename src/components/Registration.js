import { Divider, Grid, Paper, TextField, Button, Avatar, Box } from '@mui/material'
import React from 'react'

const Registration = () => {
    const paperStyle = { padding: 40,  width: 350, margin: 'auto', borderRadius: '16px', backgroundColor: 'maroon' }
    const avatarStyle = { backgroundColor: 'maroon' }
    const tfStyle = { backgroundColor: '#ededed', borderRadius: '16px' }
    const tfStyle2 = { backgroundColor: '#ededed', borderRadius: '8px', color: 'black' }
    const btnStyle = { margin: '8px 0', fontWeight: 600, backgroundColor: '#e00202', color: 'white' }
    const h2Style = { color: 'white', }


    return (
        <Box sx={{ bgcolor: '#262626', height: '100vh', width: '100vw' }}>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle} variant='square' src='https://newmediaservices.com.au/wp-content/uploads/2019/02/NMS-LOGO-HD-2014_1.png'
                            sx={{ width: 130, height: 56 }}>
                        </Avatar>
                        <h2 style={h2Style}>Create new account</h2>
                    </Grid>
                    <TextField placeholder='Enter First Name' style={tfStyle} fullWidth />
                    <Divider />
                    <Divider />
                    <TextField placeholder='Enter Surname' style={tfStyle} fullWidth />
                    <Divider />
                    <Divider />
                    <TextField placeholder='Enter Username' style={tfStyle} fullWidth required />
                    <Divider />
                    <Divider />
                    <TextField placeholder='Enter Password' style={tfStyle} type='password' fullWidth required />
                    <Divider />
                    <Divider />
                    <TextField
                        id="user type"
                        style={tfStyle2}
                        select
                        label="Please select your user type"
                        fullWidth
                        size='small'
                        defaultValue="A"
                        SelectProps={{
                            native: true,
                        }}
                        variant="filled"
                    >
                        {role.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>

                    <Button type='submit' variant='contained' style={btnStyle} position='center' fullWidth>
                        Register
                    </Button>


                </Paper>
            </Grid>
        </Box>

    )

}
const role = [
    {
        utype: 'A',
        label: 'Admin',
    },
    {
        utype: 'U',
        label: 'User',
    }
]
export default Registration

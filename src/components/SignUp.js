import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";


const CreateAccountDialog = () => {
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({

        uname: "",
        fname: "",
        lname: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Handle dialog open
    const handleOpen = () => {
        setOpen(true);
    };

    // Handle dialog close
    const handleClose = () => {
        setOpen(false);
    };

    // Handle form submission
    const handleSubmit = () => {
        // Perform form submission logic here
        // e.g., send form values to server for account creation
        handleClose();
    };
    const diaStyle = { backgroundColor: 'maroon', color: 'white' }
    const tfStyle = { backgroundColor: '#ededed', borderRadius: '16px' }
    const tfStyle2 = { backgroundColor: '#262626' }
    const btnStyle = { color: 'white' }
    return (
        <>
            <Button variant="text" style={btnStyle} onClick={handleOpen}>
                Create New Account
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={diaStyle}>Create New Account</DialogTitle>
                <DialogContent style={tfStyle2}>
                    <form >
                        <TextField
                            placeholder="Userame"
                            name="uname"
                            value={formValues.uname}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            style={tfStyle}
                        />
                        <TextField
                            placeholder="First Name"
                            name="fname"
                            value={formValues.fname}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            style={tfStyle}
                        />
                        <TextField
                            placeholder="Last Name"
                            name="lname"
                            value={formValues.lname}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            style={tfStyle}
                        />
                        <TextField
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={formValues.password}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            style={tfStyle}
                        />
                        <TextField
                            id="user type"
                            style={tfStyle}
                            select
                            label="User Type"
                            size='normal'
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
                    </form>
                </DialogContent>
                <DialogActions style={diaStyle}>
                    <Button onClick={handleClose} style={btnStyle}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} style={btnStyle}>
                        Create Account
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
const role = [
    {
        utype: 'PO',
        label: 'Purchasing Offcer',
    },
    {
        utype: 'KM',
        label: 'Kitchen Manager',
    },
    {
        utype: 'KS',
        label: 'Kitchen Staff',
    }
]

export default CreateAccountDialog;

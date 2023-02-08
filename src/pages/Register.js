import { TextField, Container, Button, Box, InputAdornment } from '@mui/material';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const nameId = nanoid();
const emailID = nanoid();
const passwordId = nanoid()

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const dispatch = useDispatch();

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const { name, email, password } = e.currentTarget;
        const newUser = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        dispatch(register(newUser));
        form.reset()
        
    }
    return (
        <Container maxWidth="xs">
            <Box sx={{
                gap: '20px',
            display: 'flex',}}>

                <form onSubmit={handleSubmit}
                    style={{
                        margin: '0 auto',
                        marginTop: '20px',
                        padding: '20px',
                        border: '1px solid #00BFFF',
                        borderRadius: '5px',
                        

                    }}
                >
                    
                        <TextField
                            id={nameId}
                            label="Name"
                            variant="outlined"
                            fullWidth
                            type='text'
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            required
                            name="name"
    

                        />
               
                   
                        <TextField
                            id={emailID}
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type='email'
                            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                            required
                            name="email"
                        />
                   
                        <TextField
                            id={passwordId}
                            label="Password"
                            variant="outlined"
                            type='password'
                            fullWidth
                            required
                            name="password"
                        />
                   
                   
                        <Button variant="contained"
                            type='submit'
                            fullWidth
                        >Register</Button>
            
                </form>
                </Box>
           
        </Container>
         
    );
}
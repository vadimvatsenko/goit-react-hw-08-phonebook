import {
    FilledInput,
    FormGroup, 
    Button,
    Box,
    InputLabel,
    FormHelperText,
    FormControl,
    InputAdornment,

    
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BadgeIcon from '@mui/icons-material/Badge';

import { LoginBoxStyle } from 'components/loginForm/loginForm';

import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const nameId = nanoid();
const emailID = nanoid();
const passwordId = nanoid();



export default function RegisterForm() {
    
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
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
        <Box sx={LoginBoxStyle}>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormControl>
                        <InputLabel
                            htmlFor={nameId}>
                            Name
                        </InputLabel>
                        <FilledInput
                            id={nameId}
                            label="Name"
                            variant="outlined"
                            fullWidth
                            type='text'
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            required
                            name="name"
                            endAdornment={
                                <InputAdornment position="end">
                                    <BadgeIcon
                                        aria-label="userIcon"
                                        edge="end"
                                    >
                                    </BadgeIcon>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText
                            id={nameId}>
                            We'll never share your name.
                        </FormHelperText>
                    </FormControl>
               
                    <FormControl>
                        <InputLabel
                            htmlFor={emailID}>
                            Email
                        </InputLabel>
                        <FilledInput
                            id={emailID}
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type='email'
                            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                            required
                            name="email"
                            autocomplete='off'
                            endAdornment={
                                <InputAdornment position="end">
                                    <BadgeIcon
                                        aria-label="userIcon"
                                        edge="end"
                                    >
                                    </BadgeIcon>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText
                            id={emailID}>
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>
                    <FormControl
                        required
                        type={showPassword ? 'text' : 'password'}>
                        <InputLabel
                            htmlFor={passwordId}>
                            Password
                        </InputLabel>
                        <FilledInput
                            id={passwordId}
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                        
                        <FormHelperText
                            id={passwordId}>
                            We'll never share your password.
                        </FormHelperText>
                    </FormControl>
                   
                    <Button variant="contained"
                        type='submit'
                        fullWidth
                    >Register</Button>
                </FormGroup>
            </form>
        </Box>
           
         
    );
}

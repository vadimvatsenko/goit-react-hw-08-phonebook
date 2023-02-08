import { StyledLink } from '../navigation/nav.styled';
import { Button, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


export default function AuthNav() {
    return (
        <>
            <StyledLink to="/register"
                style={{
                    marginLeft: 'auto'
                }}>
                <Button color="inherit">
                    <AppRegistrationIcon />
                    <Typography>Register</Typography>
                                        
                </Button>
            </StyledLink>
            <StyledLink to="/login">
                <Button color="inherit">
                    <LoginIcon />
                    <Typography>Log In</Typography>
                                        
                </Button>
            </StyledLink>
        </>
    );
}
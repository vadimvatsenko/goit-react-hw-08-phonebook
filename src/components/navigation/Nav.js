import {Container, Button, Typography, Toolbar, AppBar } from '@mui/material'
//Icons
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

import { Outlet } from "react-router-dom";
import { StyledLink } from './nav.styled';

export default function Nav() {
    return (
        <>
            <header>
                <nav>
                    <AppBar
                        position="static">
                        <Container>
                            <Toolbar>
                                <StyledLink to="/">
                                    <Button color="inherit">
                                        <HomeIcon />
                                        <Typography>Home</Typography>
                                    </Button>
                                </StyledLink>
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
                                        <Typography >Log In</Typography>
                                        
                                    </Button>
                                </StyledLink>
            
                            </Toolbar>
                        </Container>
          
                    </AppBar>
                </nav>
            </header>
            <Outlet />
            
        </>
    );
}



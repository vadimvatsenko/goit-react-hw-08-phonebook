import {Container, Button, Typography, Toolbar, AppBar } from '@mui/material'
//Icons
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

import {Outlet, Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <header>
                <nav>
                    <AppBar
                        position="static">
                        <Container>
                            <Toolbar>
                                <Link to="/"
                                style={{color: 'white'}}>
                                    <Button color="inherit">
                                        <HomeIcon />
                                        <Typography>Home</Typography>
                                    </Button>
                                </Link>
                                <Link to="/register"
                                    style={{
                                            marginLeft: 'auto'
                                        }}>
                                    <Button color="inherit">
                                        <AppRegistrationIcon />
                                        <Typography>Register</Typography>
                                        
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button color="inherit">
                                        <LoginIcon />
                                        <Typography>Log In</Typography>
                                        
                                    </Button>
                                </Link>
            
                            </Toolbar>
                        </Container>
          
                    </AppBar>
                </nav>
            </header>
            <Outlet />
            
        </>
    );
}



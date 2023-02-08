import {Container, Button, Typography, Toolbar, AppBar } from '@mui/material'
//Icons
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeIcon from '@mui/icons-material/Home';


import { Outlet } from "react-router-dom";
import { StyledLink } from './nav.styled';

import AuthNav from 'components/authNav/authNav';






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
                                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            
                            </Toolbar>
                        </Container>
          
                    </AppBar>
                </nav>
            </header>
            <Outlet />


        </>
    );
}



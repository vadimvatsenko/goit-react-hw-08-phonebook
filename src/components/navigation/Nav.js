import {Container, Button, Typography, Toolbar, AppBar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';


import { Outlet } from "react-router-dom";
import { StyledLink } from './nav.styled';

import AuthNav from 'components/authNav/authNav';
import UserMenu from 'components/userMenu/userMenu';

import { useAuth } from 'hooks/useAuth';
 






export default function Nav() {
    const { isLoggedIn } = useAuth();
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
                                {isLoggedIn && (
                                    <StyledLink to="/contacts">
                                    <Button color="inherit">
                                        <ImportContactsIcon />
                                        <Typography>Contacts</Typography>
                                    </Button>
                                </StyledLink>)}
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



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';


import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <header>
                <nav>
                    <AppBar
                        position="static">
                        <Container>
                            <Toolbar>
                                <Link to="/">
                                    <Button color="inherit">
                                        <HomeTwoToneIcon />
                                        Home
                                    </Button>
                                </Link>
                                <Link to="/register"
                                    style={{
                                            marginLeft: 'auto'
                                        }}>
                                    <Button color="inherit">
                                        <AppRegistrationTwoToneIcon />
                                        Register
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button color="inherit">
                                        <AccountCircleTwoToneIcon />
                                        Log In
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



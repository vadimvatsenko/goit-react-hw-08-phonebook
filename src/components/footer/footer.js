import AppBar from '@mui/material/AppBar';
import { Outlet } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <Outlet />
            <AppBar />
        </>
    );
}
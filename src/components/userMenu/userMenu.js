import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function UserMenu() {
  const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <>
            
            <div style={{
                marginLeft: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography style={{ display: 'flex' }}>Welcome, <AccountCircleIcon />{user.name}</Typography>
                   
                <Button color="inherit" type="button" onClick={() => dispatch(logOut())}>
                    <div style={{ display: 'flex' }}>
                        <Typography>Logout</Typography>
                        <LogoutIcon />
                    </div>
                </Button>
            </div>
        </>
    );
};



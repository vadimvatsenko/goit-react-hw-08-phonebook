import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Typography } from '@mui/material';
import { display } from '@mui/system';

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
                <Typography>Welcome, {user.name}</Typography>
                <Button color="inherit" type="button" onClick={() => dispatch(logOut())}>
                    <Typography>Logout</Typography>
                </Button>
            </div>
        </>
    );
};



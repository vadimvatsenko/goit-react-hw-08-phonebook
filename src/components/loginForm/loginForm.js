import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const LoginBoxStyle = {
      width: '400px',
      height: 'auto',
      backgroundColor: 'primary.main',
      margin: '0 auto',
      marginTop: 5,
      borderRadius: '10px',
      textAlign: 'center',
      padding: '15px'
}

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
 
    <Box sx={LoginBoxStyle}>
      <AccountCircleIcon fontSize="large" color="secondary"/>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>

    </Box>

  );
};
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { nanoid } from 'nanoid';

import InputIcon from '@mui/icons-material/Input';

import { FormControl, Box, InputLabel, FormHelperText, FormGroup, Button, FilledInput } from '@mui/material';

const emailInputId = nanoid();
const passwordInputId = nanoid();

export const LoginBoxStyle = {
      width: '400px',
      height: 'auto',
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
      <InputIcon fontSize="large" color="secondary" />
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl fullWidth>
            <InputLabel
              htmlFor={emailInputId}>
              Email address
            </InputLabel>
            <FilledInput
              id={emailInputId}
              aria-describedby="my-helper-text"
              name='email'
              required />
            <FormHelperText
              id={emailInputId}>
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel
              htmlFor={passwordInputId}>
              Password
            </InputLabel>
            <FilledInput
              id={passwordInputId}
              aria-describedby="my-helper-text"
              name='password'
              required />
            <FormHelperText
              id={passwordInputId}>
              We'll never share your password.
            </FormHelperText>
          </FormControl>
          <Button variant="contained" type='submit' fullWidth>Log In</Button>
        </FormGroup>
      </form>
    </Box>
  );
};
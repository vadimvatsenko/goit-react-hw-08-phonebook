import { TextField, Container, Button, InputLabel, Grid} from '@mui/material';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const nameId = nanoid();
const emailID = nanoid();
const passwordId = nanoid()

export default function Register() {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const { name, email, password } = e.currentTarget;
        const newUser = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        dispatch(register(newUser));
        form.reset()
        
    }
    return (
        <Container>
            <Grid >

                <form onSubmit={handleSubmit}
                    style={{ margin: '0 auto' }}>
                    <Grid>
                    <TextField
                        id={nameId}
                        label="Name"
                        variant="outlined"
                        type='text'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            required
                            name="name"
                        />
                    </Grid>
                    <Grid>
                    <TextField
                        id={emailID}
                        label="Email"
                        variant="outlined"
                        type='email'
                        pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                            required
                            name="email"
                
                        />
                        </Grid>
                <Grid>
                    <TextField
                        id={passwordId}
                        label="Password"
                        type='password'
                            required
                            name="password"
                        />
                    </Grid>
                    <Grid>
                    <Button variant="contained"
                            type='submit'>Register</Button>
                    </Grid>  
                </form>
            </Grid>
        </Container>
         
    );
}
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';

import { FormControl, Box, InputLabel, FormHelperText, FormGroup, Button, FilledInput, InputAdornment } from '@mui/material';
import { LoginBoxStyle } from 'components/loginForm/loginForm';

import BadgeIcon from '@mui/icons-material/Badge';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function Form() {
    const {items} = useSelector(selectContacts);
    const dispatch = useDispatch()

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const formSubmitHandle = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const { name, number } = e.currentTarget;
        const resultName = name.value.toLowerCase().split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        const newContact = {
        name: resultName,
        number: number.value
        };

        const getAllContactsNames = items.map(cont => cont.name);
            if (getAllContactsNames.includes(resultName)) {
                form.reset();
                return Notify.warning(`${resultName} is already in contacts`);
                } else {
                dispatch(addContacts(newContact.text));
                form.reset();
        }
       
        dispatch(addContacts(newContact));
        form.reset();
    }

    return (
        <Box sx={LoginBoxStyle}>
        <form onSubmit={formSubmitHandle}>
            <FormGroup>
                <FormControl required>
            <InputLabel 
                htmlFor={nameInputId}>
                    Name
            </InputLabel>
            <FilledInput
                id={nameInputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                endAdornment={
                                <InputAdornment position="end">
                                    <BadgeIcon
                                        aria-label="nameIcon"
                                        edge="end">
                                    </BadgeIcon>
                                </InputAdornment>
                            }
            />
            <FormHelperText
                            id={nameInputId}>
                            Please enter name.
                        </FormHelperText>
            </FormControl>
            <FormControl required>
            <InputLabel 
                htmlFor={numberInputId}>
                    Number
                    </InputLabel>
            <FilledInput
                id={numberInputId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                endAdornment={
                                <InputAdornment position="end">
                                    <PhoneAndroidIcon
                                        aria-label="phoneIcon"
                                        edge="end">
                                    </PhoneAndroidIcon>
                                </InputAdornment>
                            }
            />
            </FormControl>
             <FormHelperText
                            id={nameInputId}>
                            Please enter number.
                        </FormHelperText>

            <Button type="submit" variant="contained">Add contact</Button>
            </FormGroup>
        </form>
        </Box>
        
    );
}




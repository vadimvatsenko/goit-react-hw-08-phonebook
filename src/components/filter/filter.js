//DONE
import React from "react";
import { nanoid } from 'nanoid';
import { filterContacts } from "redux/contacts/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "redux/contacts/selectors";

import {
    FilledInput,
    FormGroup, 
    Box,
    InputLabel,
    FormHelperText,
    FormControl,
    InputAdornment,

    
} from '@mui/material';

import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

import { LoginBoxStyle } from 'components/loginForm/loginForm';

const idForFilter = nanoid();

export default function Filter() {

    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);

    const changeFilter = e => {
        const name = e.target.value.toLowerCase();
        dispatch(filterContacts(name));
    }

    return (
        <Box sx={LoginBoxStyle}>
        <form>
            <FormGroup>
                <FormControl>
            <InputLabel
                htmlFor={idForFilter}>
                Find contact by name
            </InputLabel>
            <FilledInput
                id={idForFilter}
                type="text"
                name="filter"
                onChange={changeFilter}
                value={filter}
                endAdornment={
                                <InputAdornment position="end">
                                    <ContentPasteSearchIcon
                                        aria-label="userIcon"
                                        edge="end"
                                    >
                                    </ContentPasteSearchIcon>
                                </InputAdornment>
                            } 
            />
            <FormHelperText
                id={idForFilter}>Search contacts.
            </FormHelperText>
            </FormControl>
            </FormGroup>
                        
        </form>
        </Box>
    );
}




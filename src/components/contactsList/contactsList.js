import PropTypes from 'prop-types';
import React from "react";
import { useEffect } from "react";
import { fetchContatcts } from "redux/contacts/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectFilters } from "redux/contacts/selectors";
import { deleteContacts } from "redux/contacts/operations";

import { Box, Button, Container, Typography, List } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export default function ContactsList({ title, children }) {
    const dispatch = useDispatch()
    const { items, isLoading, error } = useSelector(selectContacts);
    const filter = useSelector(selectFilters);
    const filterContacts = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) 

    useEffect(() => {
    dispatch(fetchContatcts());
    }, [dispatch]);

        
    if (items.length < 1 ) {
        return (
            <Container>
                <Typography variant="h5"
                    align='center'
                    sx={{ color: 'primary.main' }}>
                    Missing contacts
                </Typography>
            </Container>
        );
    }
                
    return (
        <Container>
            {isLoading && <Container>
                <Box sx={{ width: 300, margin: '0 auto' }}>
                    <Skeleton />
                    <Skeleton animation="pulse" />
                    <Skeleton animation={false} />
                </Box>
            </Container>}
            {error ? (<p>{error}</p>) :
                (<Container>
                    <div>
                        <Typography variant="h1" component="h2">{title}</Typography>
                        {children}
                    </div>
                    <div>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {filterContacts.map(({ id, name, number }) => (
                                <li key={id}>
                                    <p>{name}</p>
                                    <p>{number}</p>
                                    <Button variant="contained"
                                        type='button'
                                        onClick={() => { dispatch(deleteContacts(id)) }}>
                                        Remove
                                    </Button>
                                </li>
                            ))}
                        </List>
                    </div>
                </Container>
                )}
        </Container>
    );
};

ContactsList.protoType = {
    title: PropTypes.string.isRequired,
}


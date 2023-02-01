//DONE
import React from "react";
import { nanoid } from 'nanoid';
import { filterContacts } from "redux/contacts/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "redux/contacts/selectors";

const idForFilter = nanoid();

export default function Filter() {

    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);

    const changeFilter = e => {
        const name = e.target.value.toLowerCase();
        dispatch(filterContacts(name));
    }

    return (
        <form>
            <label
                htmlFor={idForFilter}>
                Find contact by name
            </label>
            <input
                id={idForFilter}
                type="text"
                name="filter"
                onChange={changeFilter}
                value={filter}
            />
        </form>
    );
}




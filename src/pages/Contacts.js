import Form from "components/form/form";
import Filter from "components/filter/filter";
import ContactsList from "components/contactsList/contactsList";


export default function Contacts() {
    return (
        <>
            <Form />
            <Filter />
            <ContactsList/>
        </>
        
        
    );
}
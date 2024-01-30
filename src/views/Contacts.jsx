import React, { useContext, useEffect } from 'react';
import { Context } from '../store/AppContext';

const Contacts = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts('my_super_agenda');
    }, []);

    return (
        <div>
            {store.contacts.map(contact => (
                <div key={contact.id}>
                    <h2>{contact.full_name}</h2>
                    <p>{contact.email}</p>
                    {/* Add more fields as necessary */}
                </div>
            ))}
        </div>
    );
};

export default Contacts;
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            getContacts: (agenda_slug) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${agenda_slug}`)
                    .then(response => response.json())
                    .then(data => setStore({ contacts: data }))
            },
            createContact: (contact) => {
                fetch('https://playground.4geeks.com/apis/fake/contact/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                })
                .then(() => getActions().getContacts(contact.agenda_slug))
            },
            updateContact: (id, updatedContact) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedContact)
                })
                .then(() => getActions().getContacts(updatedContact.agenda_slug))
            },
            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                    method: 'DELETE'
                })
                .then(() => {
                    const store = getStore();
                    getActions().getContacts(store.contacts[0].agenda_slug);
                })
            }
        }
    }
}

export default getState
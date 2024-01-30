import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import { Form, Button, Container } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

const EditContact = () => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const navigate = useNavigate()

    const [contact, setContact] = useState({
        full_name: '',
        email: '',
        agenda_slug: 'my_super_agenda',
        address: '',
        phone: '',
        picture: ''
    })

    useEffect(() => {
        const contactToEdit = store.contacts.find(contact => contact.id === id)
        if (contactToEdit) {
            setContact(contactToEdit)
        }
    }, [store.contacts, id])

    const handleChange = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        actions.updateContact(id, contact)
        navigate('/')
    }

    return (
        <Container className="mt-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" name="full_name" value={contact.full_name} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={contact.email} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" name="address" value={contact.address} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" name="phone" value={contact.phone} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default EditContact
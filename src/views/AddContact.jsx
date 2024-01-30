import React, { useContext, useState } from 'react'
import { Context } from '../store/AppContext'
import { Form, Button, Container } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'

const AddContact = () => {
    const { actions } = useContext(Context)
    const [contact, setContact] = useState({
        full_name: '',
        email: '',
        agenda_slug: 'my_super_agenda',
        address: '',
        phone: ''
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        actions.createContact(contact)
        navigate('/')
    }

    return (
        <Container className="mt-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" name="full_name" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" name="address" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default AddContact
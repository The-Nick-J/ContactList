import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import { Modal, Button, Card, ListGroup, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrash, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const { store, actions } = useContext(Context)
    const [show, setShow] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const handleClose = () => setShow(false)
    const handleShow = (id) => {
        setSelectedId(id)
        setShow(true)
    }

    useEffect(() => {
        actions.getContacts('my_super_agenda');
    }, [])

    const handleDelete = () => {
        actions.deleteContact(selectedId)
        handleClose()
    }

    return (
        <Container className='mt-5'>
            <Row className="justify-content-between align-items-center mb-3">
                <Col md={10}>
                    <h1>Contact List</h1>
                </Col>
                <Col md={2} className="text-right">
                    <Link to="/add-contact" className="btn btn-primary">Add New Contact</Link>
                </Col>
            </Row>
            {/* Display contacts here */}
            {store.contacts.map((contact, index) => (
                <Card className="mb-3" key={contact.id}>
                    <Card.Body>
                        <Row>
                            <Col xs={2}>
                                <Card.Img variant="top" src={`https://picsum.photos/200?random=${index}`} style={{ borderRadius: '50%' }} />
                            </Col>
                            <Col xs={8}>
                                <Card.Title>{contact.full_name}</Card.Title>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {contact.address}<br />
                                    <FontAwesomeIcon icon={faPhone} /> {contact.phone}<br />
                                    <FontAwesomeIcon icon={faEnvelope} /> {contact.email}
                                </Card.Text>
                            </Col>
                            <Col xs={2} className="text-right">
                                <Link to={`/edit-contact/${contact.id}`}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                                <FontAwesomeIcon icon={faTrash} onClick={() => handleShow(contact.id)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this contact?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Home
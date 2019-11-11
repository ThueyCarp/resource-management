import React, {useState } from 'react';

//boostrap
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export const AddProfile = (props) => {

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        about: '',
        fileFileId: 0
    });

    const onSubmit = e => {
        e.preventDefault();
        props.addProfile(profile)

        setProfile({firstName: '',
        lastName: '',
        email: '',
        about: '',
        fileFileId: 0})
    }

    const handleInputChange = e => {
        e.persist();
        setProfile(profile => ({
            ...profile, [e.target.name] : e.target.value
        }));
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Profile
        </Modal.Title>
        <Modal.Body>

        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type='text'
                name="firstName" 
                //id='firstName'
                value={profile.firstName} 
                placeholder="firstName"
                onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type='text'
                name="lastName" 
                //id='firstName'
                value={profile.lastName} 
                placeholder="lastName"
                onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type='text'
                name="email" 
                //id='firstName'
                value={profile.email} 
                placeholder="email"
                onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>About</Form.Label>
                <Form.Control 
                type='text'
                name="about" 
                //id='firstName'
                value={profile.about} 
                placeholder="About"
                onChange={handleInputChange}/>
            </Form.Group>                       
                     
        <Button type="submit" variant="outline-info" onClick={props.onHide}>Add</Button>
        </Form>
        </Modal.Body> 
        </Modal>
    );
}
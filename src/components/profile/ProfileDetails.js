import React, {useState, useEffect } from 'react';
import axios from 'axios';

//boostrap
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export const ProfileDetails = (props) => {

    const [profile, setProfile] = useState({
        
        firstName: '',
        lastName: '',
        email: '',
        about: '',
        fileFileId: 0
    });

     useEffect(() => {
         console.log(props.idData)
         axios.get("/api/pro/profile/" +  props.idData )
         .then(( {data }) => {
             setProfile(data)
         });
     }, [props.idData]);

     const handleInputChange1 = e => {
        e.persist();
        setProfile(profile => ({
            ...profile, [e.target.name] : e.target.value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();
        props.updateProfile(profile)

    }
   
    return (

    <UpdateProfile
        profile={profile}
        show={props.show}
        handleInputChange1={handleInputChange1}
        onSubmit={onSubmit}
        onHide={props.onHide}
    
    />

    );
}

export const UpdateProfile = (props) => {
    

    const {profile, onSubmit, handleInputChange1, onHide, ...modal} = props
    
    

    return (

        <Modal
            {...modal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Title id="contained-modal-title-vcenter">
            Profile Details
        </Modal.Title>
        <Modal.Body>

        <Form onSubmit={onSubmit} >
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type='text'
                name="firstName" 
                //id='firstName'
                value={profile.firstName} 
                
                onChange={handleInputChange1.bind(this)}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type='text'
                name="lastName" 
                //id='firstName'
                value={profile.lastName} 
                
                onChange={handleInputChange1}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type='text'
                name="email" 
                //id='firstName'
                value={profile.email} 
                
                onChange={handleInputChange1}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>About</Form.Label>
                <Form.Control 
                type='text'
                name="about" 
                //id='firstName'
                value={profile.about} 
                
                onChange={handleInputChange1}/>
            </Form.Group>                       
                     
            <Button type="submit"  variant="outline-info" onClick={onHide}>Update</Button>
        </Form>
        </Modal.Body> 
        </Modal>

    );
}
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route}  from 'react-router-dom';
import { AddEval }  from './evaluation/AddEval';
//import Routes from 'router'
import { useRoutes, A } from "hookrouter";



import { AddProfile } from './AddProfile';
import  { ProfileDetails } from './ProfileDetails';

//bootstrap
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import 'bootstrap/dist/css/bootstrap.min.css';



export const ProfileItems = ()  => {
    const routes = {
        "/addeval": () => <AddEval/>,
    }
    const [profiles, setProfiles] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalDetailShow, setModalDetailShow] = React.useState(false);
    const [idData, setIdData]= useState(0);
    const routeResults = useRoutes(routes);


    
    useEffect(() => {
        axios.get("/api/pro/profiles")
        .then(({ data }) => {
            setProfiles(data);
            //setProfileId(data.length);
            
        });
    }, []) ;

    const addProfile = profile => {
        console.log(profiles)
        axios.post('/api/pro', profile)
        .then(({data})=> setProfiles([...profiles, data
        ]));
        
             
    };
    

    const updateProfile = profile => {
        axios.put('/api/pro/', profile)
            .then(({data})=> {
                const foundIndex = profiles.findIndex( profile => profile.profileId === data.profileId);
                let newProfiles = profiles.slice();
                newProfiles[foundIndex] = data;
                setProfiles(newProfiles)});     
    }

    const removeProfile  = profileId => {axios.delete(`/api/pro/profile/${profileId}`)
    .then(setProfiles(profiles.filter(profile => profile.profileId !== profileId)))};
    
    const btnStyle = {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        
        
        
    }

    

    return    ( 
        <div>
        
        <ProfileDetails idData={idData} show={modalDetailShow}  updateProfile={updateProfile} onHide={() => setModalDetailShow(false)} />   
        <ButtonToolbar>
            <Button  style={btnStyle} variant="outline-info" onClick={() => setModalShow(true)}>Add Profile</Button>
            <AddProfile  show={modalShow} onHide={() => setModalShow(false)} addProfile={addProfile}/>              
        </ButtonToolbar> 

                
        <Table striped bordered hover >
        <thead>

            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Eamil</th>
                <th>About</th>
                <th>Evaluation</th>
                <th>Delete</th>
            </tr>
        </thead>    
         <tbody>
             
             {profiles.map(profile => (
             
             <tr key={profile.profileId}>
                    
                   <td onClick={() => {
                        setModalDetailShow(true);
                        setIdData(profile.profileId);
                    }}>{profile.profileId}</td>   
                   <td onClick={() => {
                        setModalDetailShow(true);
                        setIdData(profile.profileId);
                    }}>{profile.firstName}</td>
                   <td onClick={() => {
                        setModalDetailShow(true);
                        setIdData(profile.profileId);
                    }}>{profile.lastName}</td>
                   <td onClick={() => {
                        setModalDetailShow(true);
                        setIdData(profile.profileId);
                    }}>{profile.email}</td>
                   <td onClick={() => {
                        setModalDetailShow(true);
                        setIdData(profile.profileId);
                    }}>{profile.about}</td> 
                    <A href="/addeval">eval</A>
                    {routeResults} 
                   {/* <td><Button variant="outline-secondary" onClick={() => href="/addeval" } >Eval</Button></td> */}
                   <td><Button variant="outline-danger" onClick={() => 
                removeProfile(profile.profileId)
                    }>Delete</Button></td>
                </tr>
                
                ))} 
            
        </tbody> 
        
    </Table>
    
    </div>   
    )
    

};
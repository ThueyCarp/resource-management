import React from 'react'
import { useRoutes,  } from "hookrouter";
import Routes from './Routes'; 
//components
import { ProfileItems } from './ProfileItems'

//import axios from 'axios';

//boostrap
import 'bootstrap/dist/css/bootstrap.min.css';




export const Profiles = () => {

    const routeResults = useRoutes(Routes)
    return (
     <div>
        <ProfileItems/> 
        {routeResults}        
     </div> 
    )
}

import React from 'react'
import { Profiles } from './Profiles';
import { AddEval } from './evaluation/AddEval';

const Routes = {

    "/": () => <Profiles />,
    "/addeval": () => <AddEval/>

};


export default Routes

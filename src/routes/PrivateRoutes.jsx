import React, { use } from 'react';
import { AuthContext } from '../context/authContext/authContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location=useLocation();
    if(loading){
        return <h1>Loading...</h1>
    }

    if(!user){
       return <Navigate to='/signIn' state={location.pathname}></Navigate>
    }
    return children;
    
};

export default PrivateRoutes;
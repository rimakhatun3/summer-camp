import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
const location = useLocation()

    const {loading,user} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if(!user){
        alert('You have to log in first ')
    }
    else{
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
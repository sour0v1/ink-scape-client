import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <p className='min-h-screen w-full flex justify-center items-center'>loading...</p>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={'/log-in'}></Navigate>
    );
};

export default PrivateRoute;
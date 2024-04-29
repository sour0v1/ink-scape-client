import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate(null);
    const handleNavigate = () => {
        navigate('/');
    }
    const error = useRouteError();
    // console.log(error);
    return (
        <div className='min-h-screen border flex flex-col justify-center items-center space-y-3'>
            <h1 className='text-5xl font-bold font-roboto'>{error.status}</h1>
            <p className='font-roboto text-xl'>{error.statusText}</p>
            <p className='font-roboto'>{error.data}</p>
            <button onClick={handleNavigate} className='underline font-roboto'>Back to <span className='font-medium'>Home</span></button>
        </div>
    );
};

export default ErrorPage;
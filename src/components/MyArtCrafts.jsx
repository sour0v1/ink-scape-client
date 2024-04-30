import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import MyCraft from './MyCraft';

const MyArtCrafts = () => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user.loggedUser)
    const crafts = useLoaderData();
    console.log(crafts)
    const myAddedCrafts = user && crafts.filter(craft => craft.email === user.email);
    console.log(myAddedCrafts);
    // console.log(myAddedCrafts);
    if (loading) {
        <p>loading</p>
    }
    return (
        <div>
            <h2 className='my-9 text-2xl font-bold text-center'>My Art & Crafts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    myAddedCrafts.map((item, idx) => <MyCraft item={item} key={idx}></MyCraft>)
                }
            </div>
        </div>
    )


};

export default MyArtCrafts;
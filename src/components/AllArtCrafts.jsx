import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCraft from './AllCraft';

const AllArtCrafts = () => {
    const craftItems = useLoaderData();
    console.log(craftItems);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    craftItems.map(item => <AllCraft item={item} key={item._id}></AllCraft>)
                }
            </div>
        </div>
    );
};

export default AllArtCrafts;
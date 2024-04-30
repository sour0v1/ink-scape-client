import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCraft from './AllCraft';
import { AuthContext } from '../provider/AuthProvider';

const CraftItems = () => {
    const {theme} = useContext(AuthContext);
    const [craftItems, setCraftItems] = useState([]);
    useEffect(() => {
        fetch('https://ink-scape-server.vercel.app/craft')
            .then(res => res.json())
            .then(data => {
                setCraftItems(data)
            })
    }, [])
    return (
        <div className={`max-w-6xl m-auto ${theme ? 'mb-9': 'mb-0'}`}>
            <h2 className='my-9 text-2xl font-bold text-center'>Craft Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    craftItems.slice(0, 6).map(item => <AllCraft item={item} key={item._id}></AllCraft>)
                }
            </div>
        </div>
    );
};

export default CraftItems;
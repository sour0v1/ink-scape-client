import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCraft from './AllCraft';

const CraftItems = () => {
    const [craftItems, setCraftItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/craft')
            .then(res => res.json())
            .then(data => {
                setCraftItems(data)
            })
    }, [])
    return (
        <div className='max-w-6xl m-auto mb-9'>
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
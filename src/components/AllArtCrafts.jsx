import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCraft from './AllCraft';

const AllArtCrafts = () => {
    const craftItems = useLoaderData();
    console.log(craftItems);
    const { itemName, customization, stockStatus, price, processingTime } = craftItems;
    return (
        <div className="overflow-x-auto max-w-6xl mx-auto mb-9">
            <h2 className='my-9 text-2xl font-bold text-center'>All Art & Crafts</h2>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Status</th>
                        <th>Processing Time</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        craftItems.map((craft, idx) => <tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>{craft.itemName}</td>
                            <td>{craft.stockStatus}</td>
                            <td>{craft.processingTime}</td>
                            <td>{craft.price} $</td>
                            <td><button className='py-1 px-2 rounded bg-orange-400'>View Details</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllArtCrafts;
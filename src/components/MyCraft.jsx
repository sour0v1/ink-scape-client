import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyCraft = ({ item }) => {
    // const {theme} = useContext(AuthContext);
    console.log(item);
    const { itemName, image, subCategory, description, price, processingTime, stockStatus, craftRating, customization, user, email } = item;
    return (
        <div>
            <div className={`card w-full bg-base-100 shadow-xl`}>
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {itemName}
                    </h2>
                    <p>{description}</p>
                    <div className=''>
                        <p>Customization : {customization}</p>
                        <p>Rating : {craftRating}</p>
                        <p>Stock Status : {stockStatus}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-medium'>{price}$</p>
                        <div className="justify-end space-x-2">
                            <button className="py-1 rounded px-2 bg-green-200">Update</button>
                            <button className="py-1 rounded px-2 bg-orange-200">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraft;
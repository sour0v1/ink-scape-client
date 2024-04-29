import React from 'react';

const AllCraft = ({ item }) => {
    console.log(item);
    const { itemName, image, subCategory, description, price, processingTime, stockStatus, craftRating, customization, user, email } = item;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-fit' src={image} alt="Movie" /></figure>
                <div className="space-y-3 p-5">
                    <h2 className="card-title font-bold">{itemName}</h2>
                    <p className='font-medium'>{description}</p>
                    <div className='font-medium'>
                        <p>Customization : {customization}</p>
                        <p>Rating : {craftRating}</p>
                        <p>Stock Status : {stockStatus}</p>
                    </div>
                    <p className='text-xl font-medium'>{price}$</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">Update</button>
                        <button className="btn btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCraft;
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AllCraft = ({ item }) => {
    const navigate = useNavigate(null);
    const handleNavigate = () =>{
        navigate('/craft-details');
    }
    const {theme} = useContext(AuthContext);
    console.log(item);
    const { itemName, image, subCategory, description, price, processingTime, stockStatus, craftRating, customization, user, email } = item;
    return (
        <div>
            <div className={`card w-full bg-base-100 shadow-xl ${!theme && 'bg-gray-950'} ${!theme && 'text-white'} ${!theme && 'border border-white'}`}>
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
                            <button onClick={handleNavigate} className="py-1 rounded px-2 bg-green-200">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card card-side bg-base-100 shadow-xl">
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
            </div> */}
        </div>
    );
};

export default AllCraft;
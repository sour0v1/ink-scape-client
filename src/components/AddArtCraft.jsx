import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const AddArtCraft = () => {
    const [category, setCategory] = useState('');
    const loggedUser = 'me@email.com';

    const handleCategory = e => {
        setCategory(e.target.value);
    }

    const handleAdd = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.iname.value;
        const image = form.image.value;
        const subCategory = category;
        const description = form.description.value;
        const price = form.price.value;
        const processingTime = form.time.value;
        const stockStatus = form.stock.value;
        const craftRating = form.rating.value;
        const customization = form.customization.value;
        const user = form.cname.value;
        const email = form.email.value;
        const itemDetails = {
            itemName, image, subCategory, description, price, processingTime, stockStatus, craftRating, customization, user, email, loggedUser
        }
        console.log(itemDetails);
        // send craft item to server
        fetch('http://localhost:5000/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft item added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <div className='max-w-5xl mx-auto my-9'>
            <div className="hero min-h-screen">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAdd} className="card-body">
                        <h2 className='text-center text-xl font-bold'>Add Item</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" placeholder="Enter craft name" className="input input-bordered" required name='iname' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="Image url" className="input input-bordered" required name='image' />
                        </div>
                        <div className="form-control">
                            <p className="label">
                                <span className="label-text">Category</span>
                            </p>
                            <select onChange={handleCategory} className="select select-bordered join-item">
                                <option disabled>Select</option>
                                <option>Forest-based Landscape Painting</option>
                                <option>Drama</option>
                                <option>Action</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" placeholder="Short Description" className="textarea input-bordered" required name='description' />
                        </div>
                        <div className='flex justify-between items-center gap-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Craft price" className="input input-bordered w-full" required name='price' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input type="text" placeholder="Processing time" className="input input-bordered w-full" required name='time' />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" placeholder="In stock or made to order" className="input input-bordered" required name='stock' />
                            </div>
                        </div>
                        <div className='flex w-full justify-center gap-3 items-center'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" placeholder="Yes or No" className="input input-bordered" required name='customization' />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating" className="input input-bordered" required name='rating' />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered" required name='cname' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered" required name='email' />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
// outline-[#E6AF2E]
export default AddArtCraft;
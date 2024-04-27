import React from 'react';

const AddArtCraft = () => {
    const handleAdd = e =>{
        e.preventDefault();
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
                            <select className="select select-bordered join-item">
                                <option disabled selected>Select</option>
                                <option>Sci-fi</option>
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
                            <p className="label">
                                <span className="label-text">Stock Status</span>
                            </p>
                            <select className="select select-bordered join-item">
                                <option disabled selected>Select</option>
                                <option>In stock</option>
                                <option>Out of stock</option>
                            </select>
                        </div>
                        <div className='flex justify-between gap-3 items-center'>
                            <div className="form-control w-full">
                                <p className="label">
                                    <span className="label-text">Customization</span>
                                </p>
                                <select className="select select-bordered join-item">
                                    <option disabled selected>Select</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <p className="label">
                                    <span className="label-text">Rating</span>
                                </p>
                                <select className="select select-bordered join-item">
                                    <option disabled selected>Select</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5 days</option>
                                </select>
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
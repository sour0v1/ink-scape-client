import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
    return (
        <div className='shadow-lg mb-9 px-3 py-6'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>inkScape</h2>
                <div className='hidden md:block'>
                    <ul className='flex gap-6 justify-center items-center'>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'all-art-craft'}>All Art & Crafts</NavLink></li>
                        <li><NavLink to={'add-art-craft'}>Add Craft item</NavLink></li>
                        <li><NavLink to={'my-art-craft'}>My art and craft list</NavLink></li>
                        <li><NavLink to={'log-in'}>Log In</NavLink></li>
                        <li><NavLink to={'registration'}>Register</NavLink></li>

                    </ul>
                </div>
                <div className="dropdown dropdown-end block md:hidden">
                    <div tabIndex={0} role="button" className="btn">
                        <div className="w-10 rounded-full">
                            <p>...</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <NavLink>Home</NavLink>
                            <NavLink>Home</NavLink>
                            <NavLink>Home</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
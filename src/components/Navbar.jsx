import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='shadow-lg mb-9 px-3 py-6'>
            <div className='flex justify-between items-center'>
                <h2>inkScape</h2>
                <div className='hidden md:block'>
                    <div className='flex gap-6 justify-center items-center'>
                        <NavLink>Home</NavLink>
                        <NavLink>Home</NavLink>
                        <NavLink>Home</NavLink>
                    </div>
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
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
    return (
        <div className='shadow-lg px-3 py-6'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>inkScape</h2>
                <div className='hidden lg:block'>
                    <ul className='flex gap-6 justify-center items-center font-medium'>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'all-art-crafts'}>All Art & Crafts</NavLink></li>
                        <li><NavLink to={'add-art-craft'}>Add Craft item</NavLink></li>
                        <li><NavLink to={'my-art-crafts'}>My art and craft list</NavLink></li>
                        <li><NavLink to={'about'}>About Us</NavLink></li>
                        <li className="border px-2 py-1"><NavLink to={'log-in'}>Log In</NavLink></li>
                        <li className="border px-2 py-1"><NavLink to={'registration'}>Register</NavLink></li>
                        <li>
                            <label className="flex cursor-pointer gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </label>
                        </li>

                    </ul>
                </div>
                <div className="dropdown dropdown-end block lg:hidden">
                    <div tabIndex={0} role="button" className="btn">
                        <div className="w-6 rounded-full">
                            <p className="text-xl text-center flex justify-center items-center"><CiMenuFries /></p>
                        </div>
                    </div>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <ul className='flex flex-col gap-3 justify-center items-center'>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'all-art-craft'}>All Art & Crafts</NavLink></li>
                            <li><NavLink to={'add-art-craft'}>Add Craft item</NavLink></li>
                            <li><NavLink to={'my-art-craft'}>My art and craft list</NavLink></li>
                            <li><NavLink to={'about'}>About Us</NavLink></li>
                            <li><NavLink to={'log-in'}>Log In</NavLink></li>
                            <li><NavLink to={'registration'}>Register</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
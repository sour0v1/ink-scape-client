import { CiMenuFries } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom';
import './Nav.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { signOut } from "firebase/auth";
import auth from "../../firebase.config";

const Navbar = () => {
    // const [theme, setTheme] = useState(true);
    const { user, handleTheme ,theme } = useContext(AuthContext);
    const navigate = useNavigate(null);
    // handle sign out
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // console.log('signOut successfully');
                navigate('/log-in');
            })
    }
    const handleThemeControl = () => {
        handleTheme();
    }
    return (
        <div className={`shadow-lg px-3 py-6 ${theme ? 'bg-white' : 'bg-gray-950'} ${theme ? 'text-black' : 'text-white'}`}>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>inkScape</h2>
                <div className='hidden lg:block'>
                    <ul className='flex gap-6 justify-center items-center font-medium'>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'all-art-crafts'}>All Art & Crafts</NavLink></li>
                        <li><NavLink to={'add-art-craft'}>Add Craft item</NavLink></li>
                        <li><NavLink to={'my-art-crafts'}>My art and craft list</NavLink></li>
                        <li><NavLink to={'about'}>About Us</NavLink></li>
                        {
                            user ? <a href={`${user.photoURL}`} data-tooltip-id="my-tooltip" data-tooltip-place="right-end" data-tooltip-content={user.displayName}>photoURL</a> : <li className="border px-2 py-1"><NavLink to={'/log-in'}>Log In</NavLink></li>
                        }
                        <Tooltip id="my-tooltip" />
                        {
                            user ? <button onClick={handleSignOut}>Log Out</button> : <li className="border px-2 py-1"><NavLink to={'registration'}>Register</NavLink></li>
                        }
                        {/* <li onClick={handleThemeControl}>{theme ? 'Dark'}</li> */}
                        {
                            theme ? <li onClick={handleThemeControl}>Dark Mode</li>: <li onClick={handleThemeControl}>Light Mode</li>
                        }

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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// sweet-alert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import auth from "../firebase.config";
import { AuthContext } from "../provider/AuthProvider";

const Registration = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate(null);
    console.log(user);
    const [regError, setRegError] = useState('');
    const handleRegistration = e =>{
        e.preventDefault();
        const form = e.target;
        const  name = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.link.value;
        const userObj = {name, email, password, photoUrl}
        setRegError('');
        // console.log(name, email);
        if(password.length < 6){
            setRegError('Password length must be at least 6 character!');
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setRegError('Password must  have an Uppercase letter in the password!');
            return;
        }
        else if(!/^(?=.*[a-z]).+$/.test(password)){
            setRegError('Password must have an Lowercase letter in the password!');
            return;
        }
        // create user with email pass
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: 'Success!',
                    text: 'Registered Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  form.reset();
                  navigate('/');

            })
            .catch(error => {
                console.log(error.message);
                setRegError(error.message);
            })
        console.log(userObj)
    }
    return (
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-start items-center gap-9 w-full md:h-[550px] bg-gray-50 rounded-tl-btn rounded-bl-btn my-9">          
                <img className="h-full w-1/2 rounded-tl-btn rounded-bl-btn hidden md:block" src="/paint-log-in.jpg" alt="" />
            <div className="w-full md:w-1/2 md:mr-9 px-4 md:px-0 space-y-6">
                <h2 className="text-4xl font-bold text-center my-6">inkScape</h2>
                {
                    regError && <p className="text-red-600">{regError}</p>
                }
                <form onSubmit={handleRegistration} className="space-y-3 w-full">                  
                        {/* <label className="text-lg font-bold" htmlFor="name">Name</label> */}
                        <input className="border-b-2 border-black w-full bg-gray-50 outline-none py-2" placeholder="Name" type="text" name="userName" id="name"/>
                        <input className="border-b-2 border-black w-full bg-gray-50 outline-none py-2" placeholder="Email" type="email" name="email" id="email" required/>
                        <input className="border-b-2 border-black w-full bg-gray-50 outline-none py-2" placeholder="Password" type="password" name="password" id="password" required/>
                        <input className="border-b-2 border-black w-full bg-gray-50 outline-none py-2" placeholder="Photo URL" type="text" name="link" id="link"/>
                        <input className="btn font-bold bg-[#E6AF2E] mx-auto w-full" type="submit" value='Register' name="" id="" />
                </form>
                <p>Already Registered? <Link to={'/log-in'} className="text-blue-600 underline">Log In</Link></p>
            </div>
           
        </div>
    );
};

export default Registration;
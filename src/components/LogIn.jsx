
import { Link } from 'react-router-dom';
// icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import auth from '../firebase.config';
// sweet alert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { GithubAuthProvider } from 'firebase/auth';

const LogIn = () => {
  // log in with google
  const handleGoogleLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          title: 'Success!',
          text: 'Logged in Successfully!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }
  // github log in
  const handleGithubLogIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          title: 'Success!',
          text: 'Logged in Successfully!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className='text-2xl font-bold text-center'>inkScape</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#E6AF2E]">Login</button>
          </div>
          <p className='text-center'>Or</p>
        </form>
        <div className='px-6 space-y-3 mb-6'>
          <div onClick={handleGoogleLogIn} className='px-3 py-2 border rounded w-full border-gray-600 flex justify-center items-center gap-2 btn'>
            <span><FcGoogle /></span>
            <button>Continue with Google</button>
          </div>
          <div onClick={handleGithubLogIn} className='px-3 py-2 border rounded w-full border-gray-600 flex justify-center items-center gap-2 btn'>
            <span><FaGithub /></span>
            <button>Continue with Github</button>
          </div>
          <p className='text-center'>New to inkScape? <Link to={'/registration'} className="text-blue-600 underline">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
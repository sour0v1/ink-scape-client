import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const LogIn = () => {
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
          <div className='px-3 py-2 border rounded w-full border-gray-600 flex justify-center items-center gap-2 btn'>
            <span><FcGoogle /></span>
            <button>Continue with Google</button>
          </div>
          <div className='px-3 py-2 border rounded w-full border-gray-600 flex justify-center items-center gap-2 btn'>
            <span><FaGithub /></span>
            <button>Continue with Github</button>
          </div>
          <p>New to <i>inkScape</i>? <Link to={'/registration'} className="text-blue-600 underline">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
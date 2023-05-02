import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const handleSignIn = event => {
        event.preventDefault();
        

        console.log('s')
    }
    
    return (
        <div className='px-16'>
            <div className="hero mt-5">
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body border-solid border-2 rounded-lg">
                        <h1 className="text-xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="Username or Email" className="p-2 border-b-2 border-indigo-500" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="Passowrd" className="p-2 border-b-2 border-indigo-500" />
                            <label className="label">
                                <p>
                                    <input type="checkbox" name="" id="" />
                                    <span className=''> Remember Me</span>
                                </p>
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-md btn-warning hover:bg-yellow-700">Login</button>
                        </div>
                        <label className="label">
                            <Link to="/register" className="label-text-alt link link-hover">Don't have an account? Create an account?</Link>
                        </label>
                    </form>
                </div>
            </div>
            <div className='mt-4 flex items-center justify-center'>
                <hr style={{ width: '150px' }} />
                <p className='mx-4'>Or</p>
                <hr style={{ width: '150px' }} />
            </div>
            <div className='w-1/4 mx-auto mt-4 mb-8 flex justify-center flex-col'>
                <div className='flex justify-center items-center btn btn-outline btn-accent'>
                    <div>
                        <FaGoogle></FaGoogle>
                    </div>
                    <button className='ml-4'>
                        Continue With Google
                    </button>
                </div>
                <div className='flex justify-center items-center btn btn-outline mt-2'>
                    <div>
                        <FaGithub></FaGithub>
                    </div>
                    <button className='ml-4'>
                        Continue With Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
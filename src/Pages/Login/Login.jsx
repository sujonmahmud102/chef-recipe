import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const { signInByEmailPass, createdByGoogle, createdByGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Toast
    const notify = () => toast.success("Successfully Login", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // handle signIn
    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // email password signIn
        signInByEmailPass(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                notify();
                setError('');
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setError('User not found with this email')
                }

                else if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong password')
                }

                else {
                    setError('')
                }

            })
        // console.log(email, password)
    }

    // user create by google
    const registerByGoogle = () => {
        const provider = new GoogleAuthProvider;
        createdByGoogle(provider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                notify();
            })
            .catch(error => {
                console.log(error)
            })
    }

    // user create by github
    const registerByGithub = () => {
        const provider = new GithubAuthProvider;
        createdByGithub(provider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                notify();
            })
            .catch(error => {
                console.log(error)
            })
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
                        <div>
                            <p className='text-red-500 text-center'>
                                <small>{error}</small>
                            </p>
                        </div>
                        <div className="form-control mt-4">
                            <button className="py-2 rounded-md btn-primary hover:bg-blue-400">Login</button>
                            <ToastContainer />
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
                <div onClick={registerByGoogle} className='flex justify-center items-center btn btn-outline btn-accent'>
                    <div>
                        <FaGoogle></FaGoogle>
                    </div>
                    <button className='ml-4'>
                        Continue With Google
                    </button>
                </div>
                <div onClick={registerByGithub} className='flex justify-center items-center btn btn-outline mt-2'>
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
import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const { signInByEmailPass, createdByGoogle, createdByGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


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

    // handle password type change
    const handlePassType = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        }
        else {
            setPasswordType('password')
        }
    }

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
                // console.log(loggedUser);
                notify();
                setError('');
                form.reset();
                navigate(from, { replace: true });
                location.reload();
            })
            .catch(error => {
                console.log(error.message)
                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    setError('Please provide valid email format')
                }

                else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setError('User not found for this email')
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
                // console.log(loggedUser);
                notify();
                navigate(from, { replace: true });
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
                // console.log(loggedUser);
                notify();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='px-4 py-6 md:py-12 md:px-16'>
            <div className="hero mt-5">
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body border-solid border-2 rounded-lg">
                        <div>
                            <h1 className="text-xl font-bold">Login</h1>
                            <p className='text-red-500 text-center mt-3'>
                                <small>{error}</small>
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="Username or Email" className="p-2 border-b-2 border-indigo-500" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordType} name='password' required placeholder="Passowrd" className="p-2 pr-10 border-b-2 border-indigo-500" />
                            <div className="absolute right-1 top-10 p-2 rounded-md" onClick={handlePassType}>
                                {
                                    passwordType === 'password' ?
                                        <span>  < FaEye ></FaEye></span>
                                        :
                                        <span> <FaEyeSlash></FaEyeSlash></span>
                                }
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
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
            </div >
            <div className='mt-4 flex items-center justify-center'>
                <hr style={{ width: '150px' }} />
                <p className='mx-4'>Or</p>
                <hr style={{ width: '150px' }} />
            </div>
            <div className='md:w-1/4 mx-auto mt-4 mb-8 flex justify-center flex-col'>
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
        </div >
    );
};

export default Login;
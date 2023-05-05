import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const { createdByEmailPass, createdByGoogle, createdByGithub, updateUserInfo } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [passwordType, setPasswordType] = useState('password');


    // handle password type change
    const handlePassType = () => {
        if (passwordType === 'password') {
            setPasswordType('text')
        }
        else {
            setPasswordType('password')
        }
    }

    // Toast
    const notify = () => toast.success("Registration Successfully Completed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // handle register
    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // email password register
        createdByEmailPass(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                notify();
                setError('');
                form.reset();
                // update profile
                updateUserInfo(name, photo)
                    .then()
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error.message)
                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    setError('Please provide valid email format')
                }
                else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setError('Password should be at least 6 characters')
                }
                else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setError('Already account created for this email')
                }
                else {
                    setError('')
                }
            })
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

    // user create  by github
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
        <div className='px-4 py-6 md:py-12 md:px-16'>

            <div className="hero mt-5">
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <form onSubmit={handleRegister} className="card-body border-solid border-2 rounded-lg">
                        <h1 className="text-xl font-bold">Create an account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Your full Name" className="p-2 border-b-2 border-indigo-500" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' required placeholder="Photo URL" className="p-2 border-b-2 border-indigo-500" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="Username or Email" className="p-2 border-b-2 border-indigo-500" />
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

                        <div>
                            <p className='text-red-500 text-center'>
                                <small>{error}</small>
                            </p>
                        </div>
                        <div className="form-control mt-3">
                            <button className="py-2 rounded-md btn-primary hover:bg-blue-400">Create an account</button>
                            <ToastContainer />
                        </div>
                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already have an account? Login Now!</Link>
                        </label>
                    </form>
                </div>
            </div>
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
                <div onClick={registerByGithub} className='flex justify-center items-center w-full btn btn-outline mt-2'>
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

export default Register;
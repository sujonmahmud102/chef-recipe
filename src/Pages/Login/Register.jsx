import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const { createdByEmailPass } = useContext(AuthContext);
    const [error, setError] = useState('')

    // Toast
    const notify = () => toast.success("Register Successfully Completed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createdByEmailPass(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                notify()
            })
            .catch(error => {
                console.log(error)
            })

        console.log(name, photo, email, password)

    }


    return (
        <div className='px-16'>

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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="Passowrd" className="p-2 border-b-2 border-indigo-500" />
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

export default Register;
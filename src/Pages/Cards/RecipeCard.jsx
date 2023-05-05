import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);
    const { id, name, image, cooking_method, ingredients, rating } = recipe;

    // toast
    const notify = () => toast.success('Added to this recipe on favorite', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleDisabled = () => {
        setDisabled(!disabled);
    }

    return (
        <div className=' px-4 py-6 md:py-12'>
            <div className="lg:flex bg-base-100 shadow-xl rounded-2xl border border-orange-300">
                <div className="p-10 text-center">
                    <h2 className="text-xl lg:text-3xl font-medium lg:font-semibold mb-3">{name}</h2>
                    <LazyLoad offset={300}>
                        <img src={image} alt={name} className="w-72 h-36  lg:w-[600px] lg:h-[300px] rounded-xl" />
                    </LazyLoad>
                    <p className='text-sm my-3'>Ratings: {rating}</p>
                    <button onClick={() => { notify(), handleDisabled() }} disabled={disabled} className="btn btn-outline btn-secondary w-3/4">Add To Favorite</button>
                    <ToastContainer />
                </div>
                <div className="">

                    <div className='lg:flex lg:items-start lg:justify-evenly lg:p-10'>
                        <div className='lg:w-[50%] pl-8 pr-5'>
                            <h2 className='text-xl font-semibold mb-2'>
                                Ingredients:
                            </h2>
                            {
                                ingredients.map((item, i) =>
                                    <ul
                                        key={i}
                                        className='list-disc'>
                                        <li>{item}
                                        </li>
                                    </ul>)
                            }
                        </div>
                        <div className='lg:w-[50%] mb-4 text-justify pl-8 pr-5'>
                            <h2 className='text-xl font-semibold my-2'>
                                Cooking Method:
                            </h2>
                            {
                                cooking_method.map((item, i) =>
                                    <ul
                                        key={i}
                                        className='list-disc'>
                                        <li>{item}
                                        </li>
                                    </ul>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default RecipeCard;
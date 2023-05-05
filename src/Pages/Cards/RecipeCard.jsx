import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);
    const { id, name, image, cooking_method, ingredients, rating } = recipe;

    console.log(ingredients.length)

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
        <div>
            <div className="card w-96 h-screen bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <LazyLoad width={256} height={192} offset={300}>
                        <img src={image} alt={name} className="rounded-xl" />
                    </LazyLoad>
                </figure>
                <div className="card-body items-center text-justify">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-sm'>Ratings: {rating}</p>
                    <div>
                        <h2 className='text-xl font-semibold'>
                            Ingredients:
                        </h2>
                        {ingredients &&
                            <ul>
                                <li>{ingredients.slice(0, 2)} ...
                                    <span className="no-underline btn-link hover:bg-blue-400"><Link to={`/recipes/${id}`}>Recipe Details</Link> </span>
                                </li>
                            </ul>
                        }
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>
                            Cooking Method:
                        </h2>
                        {cooking_method &&
                            <ul>
                                <li>{cooking_method.slice(0, 2)} ...
                                    <span className="no-underline btn-link hover:bg-blue-400"><Link to={`/recipes/${id}`}>Recipe Details</Link>
                                    </span>
                                </li>
                            </ul>
                        }
                    </div>
                    <button onClick={() => { notify(), handleDisabled() }} disabled={disabled} className="btn btn-outline btn-secondary w-full">Add To Favorite</button>
                    <ToastContainer />
                </div>
            </div>

        </div>
    );
};

export default RecipeCard;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);
    const { id, name, image } = recipe;

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
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt={name} className="rounded-xl w-64 h-48" />
                </figure>
                <div className="card-body items-center text-justify">
                    <h2 className="card-title">{name}</h2>
                    <button className="btn btn-active btn-primary hover:bg-blue-400 w-full"><Link to={`/recipes/${id}`}>Recipe Details</Link> </button>
                    <button onClick={() => { notify(), handleDisabled() }} disabled={disabled} className="btn btn-outline btn-secondary w-full">Add To Favorite</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
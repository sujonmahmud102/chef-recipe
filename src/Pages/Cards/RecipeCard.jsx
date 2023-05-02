import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    // console.log(recipe)

    const { name, image } = recipe;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-64 h-48" />
                </figure>
                <div className="card-body items-center text-justify">
                    <h2 className="card-title">{name}</h2>
                    <button className="btn btn-active btn-primary hover:bg-blue-400 w-full"><Link to='/recepedetails'>Recipe Details</Link> </button>
                    <button className="btn btn-outline btn-secondary w-full">Add To Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
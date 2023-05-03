import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const recipe = useLoaderData();
    const { name, ingredients, cooking_method, rating, image } = recipe;

    console.log(cooking_method)
    return (
        <div className='m-16'>
            <div className='flex items-center justify-center gap-5'>
                <img className='w-96 h-64 rounded-2xl' src={image} alt="" />
                <div>
                    <h3 className='text-center text-2xl font-semibold italic uppercase'>
                        {name}
                    </h3>
                    <p className='text-center my-5'>Ratings: {rating}</p>
                    <button className="btn btn-outline btn-secondary w-full">Add To Favorite</button>
                </div>
            </div>
            <div className='flex justify-center gap-5 mt-8'>
                <div>
                    <h3 className='text-xl font-semibold mb-2'>
                        Ingredients:
                    </h3>
                    {
                        ingredients.map((items, i) => <ul key={i}
                            className='list-disc'>
                            <li>{items}</li>
                        </ul>)
                    }
                </div>
                <div className='mt-6'>
                    <h3 className='text-xl font-semibold mb-2'>
                        Cooking Method:
                    </h3>
                    {
                        cooking_method.map((items, i) => <ul key={i}
                            className='list-disc'>
                            <li>{items}</li>
                        </ul>)
                    }
                </div>
            </div>


        </div>
    );
};

export default RecipeDetails;
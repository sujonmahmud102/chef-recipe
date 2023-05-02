import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const recipe = useLoaderData();
    const { name, ingredients, cooking_method, rating } = recipe;

    console.log(cooking_method)
    return (
        <div className='m-16'>
            <h3 className='text-center text-2xl font-semibold'>
                Recipe Details About <span className='italic uppercase'>{name}</span>
            </h3>
            <p className='text-center'>Ratings: {rating}</p>
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
    );
};

export default RecipeDetails;
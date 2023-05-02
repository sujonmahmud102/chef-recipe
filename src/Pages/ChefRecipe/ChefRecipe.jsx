import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    const [chef, setChef] = useState({});
    const chefData = useLoaderData();
    const { id } = useParams();

    const { name, bio, likes, num_recipes, years_of_experience, picture } = chef;

    // console.log(name)

    useEffect(() => {
        const displayChefData = chefData.find(specificChef => specificChef.id == id);
        setChef(displayChefData)
    }, [])

    return (
        <div>
            <div className='bg-slate-200 my-12 mx-16 rounded-xl'>
                <div className="px-24 pt-5 flex items-center gap-24 shadow-xl">
                    <figure className='w-96'><img src={picture} alt="" /></figure>
                    <div className="">
                        <div className='ml-12'>
                            <h2 className="text-3xl font-semibold mb-2">{name}</h2>
                            <p className='text-gray-500 mb-2 w-96'><small>{bio}</small></p>
                            <p className='italic'>Years of experience: {years_of_experience}</p>
                            <p className='italic '>Numbers of recipes: {num_recipes}</p>
                            <p className='italic'>Likes: {likes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;
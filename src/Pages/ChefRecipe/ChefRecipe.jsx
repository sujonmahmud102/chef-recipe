import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../Cards/RecipeCard';
import LazyLoad from 'react-lazy-load';
import { HiBriefcase } from "react-icons/hi2";
import { BsFillBagPlusFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";





const ChefRecipe = () => {
    const [chef, setChef] = useState({});
    const [recipes, setRecipes] = useState([])

    const chefData = useLoaderData();
    const { id } = useParams();

    const { name, bio, likes, num_recipes, years_of_experience, picture } = chef;

    // console.log(name)

    useEffect(() => {
        const displayChefData = chefData.find(specificChef => specificChef.id == id);
        setChef(displayChefData)
    }, [])

    useEffect(() => {
        fetch(`https://chef-recipe-a10-server-sujonmahmud102.vercel.app/chef/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    // console.log(recipes)

    return (
        <div className='px-4 py-3 md:py-12 md:px-16'>
            <div className='bg-slate-200 my-12 rounded-xl'>
                <div className="px-6 lg:px-24 pt-5 lg:flex items-center gap-24 shadow-xl">
                    <LazyLoad offset={300}>
                        <img className='w-full lg:w-64' src={picture} alt="Chef Picture" />
                    </LazyLoad>
                    <div className="">
                        <div className='lg:ml-12'>
                            <h2 className="text-xl lg:text-3xl font-semibold my-3">{name}</h2>
                            <p className='text-sm lg:text-base text-gray-500 mb-2 lg:w-96'><small>{bio}</small></p>
                            <ul className='pb-5'>
                                <li className='flex items-center'>
                                    <strong className='flex items-center gap-2 font-normal lg:font-medium'>
                                        <HiBriefcase></HiBriefcase>
                                        <span>Years of experience:</span>
                                    </strong>
                                    <span className='text-xs lg:text-base font-medium ml-6 lg:ml-12'>{years_of_experience}</span>
                                </li>
                                <li className='flex items-center'>
                                    <strong className='flex items-center gap-2 font-normal lg:font-medium'>
                                        <BsFillBagPlusFill></BsFillBagPlusFill>
                                        <span>Numbers of recipes:</span>
                                    </strong>
                                    <span className='text-xs lg:text-base font-medium ml-6 lg:ml-12'>{num_recipes}</span>
                                </li>
                                <li className='flex items-center'>
                                    <strong className='flex items-center gap-2 font-normal lg:font-medium'>
                                        <AiFillLike></AiFillLike>
                                        <span> Likes:</span>
                                    </strong>
                                    <span className='text-xs lg:text-base font-medium ml-6 lg:ml-12'>{likes}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-5xl font-bold'>
                    List of recipes from {name}
                </h2>
                <div className=''>
                    {
                        recipes.map(recipe => <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                        ></RecipeCard>)
                    }

                </div>
            </div>

        </div>
    );
};

export default ChefRecipe;
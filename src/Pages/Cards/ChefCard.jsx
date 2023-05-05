import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChefCard = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-a10-server-sujonmahmud102.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefData(data))

    }, [])

    return (
        <div className='px-4 sm:px-6 lg:px-16 my-16'>
            <div className='my-5 text-center'>
                <p className='text-green-500 font-serif text-lg md:text-xl mb-2'>
                    Expert and Professional
                </p>
                <h1 className='text-center font-semibold text-2xl'>
                    TOP CHEF'S
                </h1>
            </div>

            <div className='lg:grid lg:grid-cols-3 gap-4'>
                {
                    chefData.map(chef => <div
                        key={chef.id}
                    >
                        <div className="card card-side bg-base-100 shadow-xl mb-3 p-2 pb-0 ">
                            <figure><img className='w-24 sm:w-48' src={chef.picture} alt={chef.name} /></figure>
                            <div className="card-body">
                                <h2 className="text-md font-medium sm:card-title">{chef.name}</h2>
                                <p className='text-xs sm:text-base' >Years of experience: {chef.years_of_experience}</p>
                                <p className='text-xs sm:text-base'>Numbers of recipes: {chef.num_recipes}</p>
                                <p className='text-xs sm:text-base'>Likes: {chef.likes}</p>
                                <div className="card-actions justify-center">
                                    <button className="text-xs  border border-blue-800 px-3 py-1 rounded-md btn btn-outline btn-primary"><Link to={`/chefrecipe/${chef.id}`}>View Recipes</Link> </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default ChefCard;
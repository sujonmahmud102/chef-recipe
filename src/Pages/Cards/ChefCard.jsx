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
        <div className='px-16 my-8'>
            <h1 className='text-center font-semibold text-2xl'>
                TOP CHEF'S
            </h1>

            <div className='lg:grid lg:grid-cols-3 gap-4'>
                {
                    chefData.map(chef => <div
                        key={chef.id}
                    >
                        <div className="card card-side bg-base-100 shadow-xl mb-3">
                            <figure className='w-48'><img src={chef.picture} alt={chef.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{chef.name}</h2>
                                <p>Years of experience: {chef.years_of_experience}</p>
                                <p>Numbers of recipes: {chef.num_recipes}</p>
                                <p>Likes: {chef.likes}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-outline btn-primary"><Link to={`/chefrecipe/${chef.id}`}>View Recipes</Link> </button>
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
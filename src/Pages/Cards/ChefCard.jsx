import React, { useEffect, useState } from 'react';

const ChefCard = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefData(data))

    }, [])
    console.log(chefData)
    return (
        <div className='px-16 my-8'>
            <h1 className='text-center font-semibold text-2xl'>
                TOP CHEF'S
            </h1>

            <div className='grid grid-cols-3 gap-4'>
                {
                    chefData.map(chef => <div
                        key={chef.id}
                    >
                        <div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={chef.picture} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{chef.name}</h2>
                                    <p>Years of experience: {chef.years_of_experience}</p>
                                    <p>Numbers of recipes: {chef.num_recipes}</p>
                                    <p>Likes: {chef.likes}</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-primary">View Recipes</button>
                                    </div>
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
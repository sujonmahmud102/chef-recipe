import React from 'react';
import { Link } from 'react-router-dom';

const RecipeProgram = () => {
    return (
        <div className='px-4 sm:px-6 lg:px-16 my-16'>
            <div className='my-5 text-center'>
                <p className='text-green-500 font-serif text-xl mb-2'>
                    Best Articles & News
                </p>
                <h1 className='text-3xl md:text-5xl font-semibold'>
                    RECIPES PROGRAMS
                </h1>
            </div>
            <div className=' grid lg:grid-cols-3 gap-2'>
                <div className="card w-84 sm:w-96 bg-base-100 shadow-xl">
                    <figure><img className='pt-5 w-3/4 lg:w-full rounded-xl' src="https://html.webinane.com/assets/images/resources/news1.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p className='text-sm sm:text-base font-serif'>20 July 2021</p>
                        <h2 className="text-lg sm:card-title hover:text-green-500">Fast-food chain, go behind the scenes</h2>
                        <p className='text-sm sm:text-base font-thin'>To fully understand what happens inside the fast food chain, we went along to Kirkby McDonald's to get an exclusive behind the scenes tour ... <button className="no-underline btn-link">Learn More</button> </p>
                    </div>
                </div>
                <div className="card w-84 sm:w-96 bg-base-100 shadow-xl">
                    <figure><img className='pt-5 w-3/4 lg:w-full rounded-xl' src="https://html.webinane.com/assets/images/resources/news2.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p className='text-sm sm:text-base font-serif'>21 July 2021</p>
                        <h2 className="text-lg sm:card-title hover:text-green-500">Fast-food chain, go behind the scenes</h2>
                        <p className='text-sm sm:text-base font-thin'>To fully understand what happens inside the fast food chain, we went along to Kirkby McDonald's to get an exclusive behind the scenes tour ... <button className="no-underline btn-link">Learn More</button> </p>
                    </div>
                </div>
                <div className="card w-84 sm:w-96 bg-base-100 shadow-xl">
                    <figure><img className='pt-5 w-3/4 lg:w-full rounded-xl' src="https://html.webinane.com/assets/images/resources/news3.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p className='text-sm sm:text-base font-serif'>22 July 2021</p>
                        <h2 className="text-lg sm:card-title hover:text-green-500">Fast-food chain, go behind the scenes</h2>
                        <p className='text-sm sm:text-base font-thin'>To fully understand what happens inside the fast food chain, we went along to Kirkby McDonald's to get an exclusive behind the scenes tour ... <button className="no-underline btn-link">Learn More</button> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeProgram;
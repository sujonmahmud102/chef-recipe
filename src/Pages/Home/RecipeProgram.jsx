import React from 'react';

const RecipeProgram = () => {
    return (
        <div className='my-8 px-16'>
            <div className='my-5 text-center'>
                <p className='text-green-500 font-serif text-xl mb-2'>
                    Best Articles & News
                </p>
                <h1 className='text-5xl font-semibold'>
                    RECIPES PROGRAMS
                </h1>
            </div>
            <div className=' grid lg:grid-cols-3 gap-2'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='rounded-xl' src="https://html.webinane.com/assets/images/resources/news1.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p className='font-serif'>20 July 2021</p>
                        <h2 className="card-title hover:text-green-500">Fast-food chain, go behind the scenes</h2>
                        <p className='font-thin'>To fully understand what happens inside the fast food chain, we went along to Kirkby McDonald's to get an exclusive behind the scenes tour...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='rounded-xl' src="https://html.webinane.com/assets/images/resources/news2.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p className='font-serif'>21 July 2021</p>
                        <h2 className="card-title hover:text-green-500">Fast-food chain, go behind the scenes</h2>
                        <p className='font-thin'>To fully understand what happens inside the fast food chain, we went along to Kirkby McDonald's to get an exclusive behind the scenes tour...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='rounded-xl' src="https://html.webinane.com/assets/images/resources/news3.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p className='font-serif'>22 July 2021</p>
                        <h2 className="card-title hover:text-green-500">Fast-food chain, go behind the scenes</h2>
                        <p className='font-thin'>To fully understand what happens inside the fast food chain, we went along to Kirkby McDonald's to get an exclusive behind the scenes tour...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeProgram;
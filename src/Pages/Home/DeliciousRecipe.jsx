import React from 'react';



const DeliciousRecipe = () => {


    return (
        <div className='mb-16 px-4 py-6 md:py-12 md:px-16 bg-slate-300'>
            <div className='mb-5 text-center'>
                <p className='text-green-500 font-serif text-lg md:text-xl mb-2'>
                    Delicious Taste of
                </p>
                <h1 className='text-3xl md:text-5xl font-semibold'>
                    TODAY RECIPES
                </h1>
            </div>
            <div className=' grid lg:grid-cols-3 gap-2'>
                <div className="p-6 rounded-lg bg-base-100 shadow-xl">
                    <img className='w-36 md:w-64 md:h-64 rounded-full mt-2 mx-auto' src="https://html.webinane.com/assets/images/resources/recipe6.png" alt="" />
                    <div className='pl-3 mt-3'>
                        <h2 className="text-md font-medium md:card-title hover:text-green-500">Sesame Honey Roasted</h2>
                        <p className='font-thin text-sm md:text-base md:font-light my-2'>By Gino D'Acampo</p>
                        <p className="no-underline btn-link">Main Course</p>
                    </div>
                </div>
                <div className="p-6 rounded-lg bg-base-100 shadow-xl">
                    <img className='w-36 md:w-64 md:h-64 rounded-full mt-2 mx-auto' src="https://html.webinane.com/assets/images/resources/today-recipe2.jpg" alt="" />
                    <div className='pl-3 mt-3'>
                        <h2 className="text-md font-medium md:card-title hover:text-green-500">Chicken Reshmi Kabab</h2>
                        <p className='font-thin text-sm md:text-base md:font-light my-2'>By Addison</p>
                        <p className="no-underline btn-link">Main Course</p>
                    </div>
                </div>
                <div className="p-6 rounded-lg bg-base-100 shadow-xl">
                    <img className='w-36 md:w-64 md:h-64 rounded-full mt-2 mx-auto' src="https://html.webinane.com/assets/images/resources/today-recipe3.jpg" alt="" />
                    <div className='pl-3 mt-3'>
                        <h2 className="card-title hover:text-green-500">Sesame Honey Roasted</h2>
                        <p className='font-light my-2'>By Gino D'Acampo</p>
                        <p className="no-underline btn-link">Main Course</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliciousRecipe;
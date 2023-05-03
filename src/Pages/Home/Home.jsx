import React from 'react';
import ChefCard from '../Cards/ChefCard';
import HomeBanner from './HomeBanner';
import RecipeProgram from './RecipeProgram';


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ChefCard></ChefCard>
            <RecipeProgram></RecipeProgram>
        </div>
    );
};

export default Home;
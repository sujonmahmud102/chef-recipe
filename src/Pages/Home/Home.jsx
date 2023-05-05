import React from 'react';
import ChefCard from '../Cards/ChefCard';
import HomeBanner from './HomeBanner';
import RecipeProgram from './RecipeProgram';
import DeliciousRecipe from './DeliciousRecipe';



const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <DeliciousRecipe></DeliciousRecipe>
            <ChefCard></ChefCard>
            <RecipeProgram></RecipeProgram>
        </div>
    );
};

export default Home;
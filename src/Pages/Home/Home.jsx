import React from 'react';
import ChefCard from '../Cards/ChefCard';
import HomeBanner from './HomeBanner';


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ChefCard></ChefCard>
        </div>
    );
};

export default Home;
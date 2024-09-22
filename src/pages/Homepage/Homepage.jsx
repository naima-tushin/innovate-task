import React from 'react';
import Banner from '../Banner/Banner';
import SignUp from '../SignUp/SignUp';
import Explore from '../Explore/Explore';
import OverviewCollection from '../OverviewCollection/OverviewCollection';
import Discover from '../Discover/Discover';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <SignUp/>
            <Explore/>
            <OverviewCollection/>
            <Discover/>
        </div>
    );
};

export default Homepage;
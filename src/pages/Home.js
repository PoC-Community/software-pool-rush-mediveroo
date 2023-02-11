import React from 'react';
import Drugs from '../components/Drugs';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Drugs />
        </div>
    );
};

export default Home;
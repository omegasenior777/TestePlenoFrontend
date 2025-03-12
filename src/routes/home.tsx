import React from 'react';
import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Body from '../components/body/body';

const HomePage: React.FC = () => {

    return (
        <>
            <Navbar />
            <Header />
            <Body/>
        </>
    );
};

export default HomePage;
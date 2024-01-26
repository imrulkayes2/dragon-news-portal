import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RigntSideNav/RightSideNav';
import Headline from '../Components/Headline/Headline';

const Home = () => {
    return (
        <div className='text-center'>
            <Header></Header>
            <Headline></Headline>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='grid col-span-2 border'>
                    <h2>Dragon News Home</h2>
                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
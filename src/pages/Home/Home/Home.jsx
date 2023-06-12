import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Leadr from '../Leadr';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Leadr></Leadr>
        </div>
    );
};

export default Home;
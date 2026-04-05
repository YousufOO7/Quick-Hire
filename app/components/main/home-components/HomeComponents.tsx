import React from 'react';
import Banner from '../pages/banner/Banner';
import Marquee from '../pages/marquee/Marquee';

const HomeComponents = () => {
    return (
        <div className='space-y-2'>
            <Banner />
            <Marquee />
        </div>
    );
};

export default HomeComponents;
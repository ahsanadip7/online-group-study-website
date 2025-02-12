import React from 'react';
import Banner from './HomeComponent/Banner';
import Feature from './HomeComponent/Feature';
import Faq from './HomeComponent/Faq';
import ReviewSection from './HomeComponent/ReviewSection';
import GiveReview from './HomeComponent/GIveReview';

const Home = () => {
    

    return (
       <div>
            <Banner />
            <Feature />
            <Faq />
            <ReviewSection />
            <GiveReview />
        </div>
    );
};

export default Home;

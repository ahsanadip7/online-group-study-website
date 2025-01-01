import React, { useContext } from 'react';
import Banner from './HomeComponent/Banner';
import Feature from './HomeComponent/Feature';
import Faq from './HomeComponent/Faq';
import { AuthContext } from './AuthProvider/AuthProvider';

const Home = () => {
    const { toggleTheme, isDarkMode } = useContext(AuthContext);

    return (
        <div>
            <div className='flex justify-end'>
            <button
                onClick={toggleTheme}
                className="p-2 rounded bg-gray-200 m-2  dark:bg-gray-800 dark:text-white"
            >
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            </div>
            <Banner />
            <Feature />
            <Faq />
        </div>
    );
};

export default Home;

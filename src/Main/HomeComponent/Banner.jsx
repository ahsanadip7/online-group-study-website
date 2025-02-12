import React from 'react';
import { FaBookOpen, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-700 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 h-[500px] flex items-center justify-center text-white">
            <div className="text-center p-6 max-w-3xl">
                
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
                    Learn Together, Grow Together
                </h1>
                <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 mb-6">
                    Collaborate with peers, share knowledge, and excel in your studies.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/assignments">
                        <button className="flex items-center gap-2 bg-white text-blue-600 dark:bg-gray-800 dark:text-gray-300 px-6 py-3 rounded-lg shadow-md transition-all hover:bg-gray-100 dark:hover:bg-gray-700">
                            <FaBookOpen /> View Assignments
                        </button>
                    </Link>
                    <Link to="/study-groups">
                        <button className="flex items-center gap-2 bg-white text-purple-600 dark:bg-gray-800 dark:text-gray-300 px-6 py-3 rounded-lg shadow-md transition-all hover:bg-gray-100 dark:hover:bg-gray-700">
                            <FaUsers /> Join Study Group
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

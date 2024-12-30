import React from 'react';
import { FaBookOpen, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-[500px] flex items-center justify-center text-white">
            <div className="text-center p-5">
                <h1 className="text-4xl font-bold mb-4">Learn Together, Grow Together</h1>
                <p className="text-lg mb-6">Collaborate with peers, share knowledge, and excel in your studies.</p>
                
                {/* Buttons */}
                <div className="flex gap-4 justify-center">
                    <Link to="/assignments">
                        <button className="flex items-center gap-2 bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-gray-100">
                            <FaBookOpen /> View Assignments
                        </button>
                    </Link>
                    <Link to="/study-groups">
                        <button className="flex items-center gap-2 bg-white text-purple-500 px-6 py-3 rounded-md hover:bg-gray-100">
                            <FaUsers /> Join Study Group
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

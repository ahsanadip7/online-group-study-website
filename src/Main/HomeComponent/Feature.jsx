import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaTasks, FaClock, FaLock, FaChartLine } from 'react-icons/fa';

const Feature = () => {
    const features = [
        {
            icon: <FaChalkboardTeacher className="text-cyan-400 text-4xl" />,
            title: "Collaborative Learning",
            description: "Engage with peers in group study sessions and learn together effectively."
        },
        {
            icon: <FaTasks className="text-emerald-400 text-4xl" />,
            title: "Assignments Management",
            description: "Create, manage, and track assignments with deadlines and difficulty levels."
        },
        {
            icon: <FaClock className="text-purple-400 text-4xl" />,
            title: "Deadline Reminders",
            description: "Stay on track with timely reminders for upcoming assignments."
        },
        {
            icon: <FaUsers className="text-yellow-400 text-4xl" />,
            title: "Study Groups",
            description: "Join study groups and collaborate with classmates to boost productivity."
        },
        {
            icon: <FaLock className="text-red-400 text-4xl" />,
            title: "Secure Access",
            description: "Keep your data safe with secure logins and protected content."
        },
        {
            icon: <FaChartLine className="text-indigo-400 text-4xl" />,
            title: "Progress Tracking",
            description: "Monitor your learning progress and analyze performance trends."
        },
    ];

    return (
        <div className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
                    Features That Empower Learning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;

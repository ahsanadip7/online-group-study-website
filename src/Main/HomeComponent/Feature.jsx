import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaTasks, FaClock, FaLock, FaChartLine } from 'react-icons/fa';

const Feature = () => {
    const features = [
        {
            icon: <FaChalkboardTeacher className="text-blue-500 text-4xl" />,
            title: "Collaborative Learning",
            description: "Engage with peers in group study sessions and learn together effectively."
        },
        {
            icon: <FaTasks className="text-green-500 text-4xl" />,
            title: "Assignments Management",
            description: "Create, manage, and track assignments with deadlines and difficulty levels."
        },
        {
            icon: <FaClock className="text-purple-500 text-4xl" />,
            title: "Deadline Reminders",
            description: "Stay on track with timely reminders for upcoming assignments."
        },
        {
            icon: <FaUsers className="text-orange-500 text-4xl" />,
            title: "Study Groups",
            description: "Join study groups and collaborate with classmates to boost productivity."
        },
        {
            icon: <FaLock className="text-red-500 text-4xl" />,
            title: "Secure Access",
            description: "Keep your data safe with secure logins and protected content."
        },
        {
            icon: <FaChartLine className="text-indigo-500 text-4xl" />,
            title: "Progress Tracking",
            description: "Monitor your learning progress and analyze performance trends."
        },
    ];

    return (
        <div className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Features That Empower Learning</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;

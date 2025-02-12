import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MySubmitted = () => {
    const {user} = useContext(AuthContext)
    const submissions = useLoaderData() 
    console.log(submissions);
    const userSubmissions = submissions.filter(submission => submission.email === user?.email)

    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: "url('https://via.placeholder.com/1920x400?text=My+Assignments')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold">My Submitted Assignments</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center">My Assignments</h2>
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                <th className="border border-gray-300 px-4 py-2">Title</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Marks</th>
                                <th className="border border-gray-300 px-4 py-2">Obtained Marks</th>
                                <th className="border border-gray-300 px-4 py-2">Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userSubmissions.map((submission, index) => (
                                <tr key={index} className="text-center hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="border border-gray-300 px-4 py-2">{submission.title}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-indigo-500 font-medium">{submission.difficultyLevel}</td>
                                    <td className="border border-gray-300 px-4 py-2">{submission.marks}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-green-500 font-medium">{submission.obtainedMarks || 'N/A'}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-gray-600 dark:text-gray-300">{submission.feedback || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySubmitted;

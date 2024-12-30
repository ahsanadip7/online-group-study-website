import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MySubmitted = () => {
    const {user} = useContext(AuthContext)
    const submissions = useLoaderData() 
    console.log(submissions);
    const userSubmissions = submissions.filter(submission => submission.email === user?.email)
    console.log(userSubmissions);


    return (
        
        <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">My Assignments</h2>
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Marks</th>
                        <th className="border border-gray-300 px-4 py-2">Obtained Marks</th>
                        <th className="border border-gray-300 px-4 py-2">Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {userSubmissions.map((submission, index) => (
                        <tr key={index} className="text-center">
                            <td className="border border-gray-300 px-4 py-2">{submission.title}</td>
                            <td className="border border-gray-300 px-4 py-2">{submission.difficultyLevel}</td>
                            <td className="border border-gray-300 px-4 py-2">{submission.marks}</td>
                            <td className="border border-gray-300 px-4 py-2">{submission.obtainedMarks || 'N/A'}</td>
                            <td className="border border-gray-300 px-4 py-2">{submission.feedback || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MySubmitted;
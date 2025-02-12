import React, { useState, useEffect, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Spinner from '../../Spinner';

const PendingAssignment = () => {
    const { user } = useContext(AuthContext);
    const subAssignments = useLoaderData();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000); // Simulating API call
    }, []);

    return (
        <div className="dark:bg-gray-900">
            <div>
                {loading ? <Spinner /> : <h1 className="text-center text-2xl"></h1>}
            </div>

            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center h-64 dark:bg-gray-800"
                style={{ backgroundImage: "url('https://via.placeholder.com/1920x400?text=Pending+Assignments')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Pending Assignments</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Review Pending Assignments</h2>
                <div className="overflow-x-auto shadow-lg rounded-lg bg-white dark:bg-gray-800">
                    <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white">
                                <th className="border border-gray-300 px-4 py-2">Title</th>
                                <th className="border border-gray-300 px-4 py-2">Marks</th>
                                <th className="border border-gray-300 px-4 py-2">Examinee</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subAssignments.map(assignment => (
                                <tr key={assignment._id} className="text-center hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="border border-gray-300 px-4 py-2">{assignment.assignmentTitle}</td>
                                    <td className="border border-gray-300 px-4 py-2">{assignment.marks}</td>
                                    <td className="border border-gray-300 px-4 py-2">{assignment.submittedBy}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-indigo-500 font-medium">{assignment.status}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {user.email !== assignment.submittedBy ? (
                                            <Link to={`/mark/${assignment._id}`}>
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                                    Give Mark
                                                </button>
                                            </Link>
                                        ) : (
                                            <p className="text-gray-400">N/A</p>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PendingAssignment;

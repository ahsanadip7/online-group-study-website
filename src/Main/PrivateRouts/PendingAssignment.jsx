import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const PendingAssignment = () => {
    const subAssignments = useLoaderData(); // Data loaded via React Router's loader
   

  

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Pending Assignments</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Marks</th>
                            <th className="border border-gray-300 px-4 py-2">Examinee</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subAssignments.map(assignment => (
                            <tr key={assignment._id} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{assignment.assignmentTitle}</td>
                                <td className="border border-gray-300 px-4 py-2">{assignment.marks}</td>
                                <td className="border border-gray-300 px-4 py-2">{assignment.submittedBy}</td>
                                <td className="border border-gray-300 px-4 py-2">{assignment.status}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                   <Link to={`/mark/${assignment._id}`}>
                                   <button
                                        className="btn btn-primary" >
                                        Give Mark
                                    </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

           
        </div>
    );
};

export default PendingAssignment;

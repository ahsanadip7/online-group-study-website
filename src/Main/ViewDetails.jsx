import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider/AuthProvider';

const ViewDetails = () => {
    const { user } = useContext(AuthContext);
    const assignment = useLoaderData();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [submissionLink, setSubmissionLink] = useState('');
    const [quickNote, setQuickNote] = useState('');

    // Destructure assignment details
    const {
        title,
        description,
        marks,
        thumbnailUrl,
        difficultyLevel,
        dueDate,
        email,
    } = assignment;

    const handleTakeAssignment = () => {
        setShowModal(true);
    };

    const handleSubmitAssignment = () => {
        const submissionData = {
            assignmentId: assignment._id,
            assignmentTitle: assignment.title,
            marks: assignment.marks,
            submissionLink,
            quickNote,
            status: 'pending',
            submittedBy: user?.email,
        };

        fetch('https://assignment-11-server-side-nine.vercel.app/submissions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submissionData),
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment submitted successfully!',
                    icon: 'success',
                });
                setShowModal(false);
            })
            .catch(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to submit assignment. Try again.',
                    icon: 'error',
                });
            });
    };

    return (
        <div className="min-h-[calc(100vh-160px)] py-10 bg-gray-50 dark:bg-gray-900">
            <div className=" bg-gray-100 dark:bg-gray-900 p-6">
                <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    {/* Thumbnail */}
                    <img
                        src={thumbnailUrl}
                        alt={title}
                        className="w-full h-72 object-cover"
                    />

                    <div className="p-6">
                        {/* Title */}
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                            {title}
                        </h2>

                        {/* Details */}
                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                            <strong>Description:</strong>{' '}
                            <a
                                href={description}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 dark:text-blue-400 underline"
                            >
                                View Document
                            </a>
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong>Marks:</strong> {marks}
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong>Difficulty Level:</strong> {difficultyLevel}
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong>Due Date:</strong> {new Date(dueDate).toLocaleDateString()}
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong>Created by:</strong> {email}
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 mt-6">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                            >
                                <FaArrowLeft />
                                Back
                            </button>

                            <button
                                onClick={handleTakeAssignment}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Take Assignment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-[95%] max-w-md">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                Submit Assignment
                            </h3>

                            <input
                                type="text"
                                placeholder="Google Docs Link"
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded mb-4 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
                                value={submissionLink}
                                onChange={(e) => setSubmissionLink(e.target.value)}
                            />

                            <textarea
                                placeholder="Quick Note"
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded mb-4 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
                                value={quickNote}
                                onChange={(e) => setQuickNote(e.target.value)}
                            ></textarea>

                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmitAssignment}
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewDetails;

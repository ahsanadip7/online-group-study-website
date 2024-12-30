import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ViewDetails = () => {
    const assignment = useLoaderData(); // Load data passed through React Router
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
            submissionLink,
            quickNote,
            status: 'pending',
            submittedBy: email, // Capture user's email
        };

        fetch('http://localhost:5000/submissions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment submitted successfully!',
                    icon: 'success',
                });
                setShowModal(false);
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to submit assignment. Try again.',
                    icon: 'error',
                });
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Thumbnail */}
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className="w-full h-64 object-cover"
                />

                <div className="p-6">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {title}
                    </h2>

                    {/* Details */}
                    <p className="text-gray-600 text-lg mb-4">
                        <strong>Description:</strong>{' '}
                        <a
                            href={description}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            View Document
                        </a>
                    </p>

                    <p className="text-gray-600 mb-4">
                        <strong>Marks:</strong> {marks}
                    </p>

                    <p className="text-gray-600 mb-4">
                        <strong>Difficulty Level:</strong> {difficultyLevel}
                    </p>

                    <p className="text-gray-600 mb-4">
                        <strong>Due Date:</strong>{' '}
                        {new Date(dueDate).toLocaleDateString()}
                    </p>

                    <p className="text-gray-600 mb-4">
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
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-xl font-semibold mb-4">
                            Submit Assignment
                        </h3>
                        <input
                            type="text"
                            placeholder="Google Docs Link"
                            className="w-full p-2 border rounded mb-4"
                            value={submissionLink}
                            onChange={(e) => setSubmissionLink(e.target.value)}
                        />
                        <textarea
                            placeholder="Quick Note"
                            className="w-full p-2 border rounded mb-4"
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
    );
};

export default ViewDetails;
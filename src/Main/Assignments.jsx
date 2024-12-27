import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Assignments = () => {
    const assignments = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleDelete = (assignment) => {
        const { email, _id } = assignment; // Destructure email and _id from the assignment object

        // Confirm dialog using SweetAlert2
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // Proceed if the user confirms deletion
            if (result.isConfirmed) {
                // Check if the logged-in user is the creator
                if (user.email === email) {
                    fetch(`http://localhost:5000/assignmentCollection/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "The assignment has been deleted.",
                                    icon: "success"
                                });
                            } else {
                                Swal.fire({
                                    title: "Error!",
                                    text: "Failed to delete the assignment. Try again later.",
                                    icon: "error"
                                });
                            }
                        })
                        .catch(err => {
                            console.error("Delete error:", err);
                            Swal.fire({
                                title: "Error!",
                                text: "Something went wrong. Please try again.",
                                icon: "error"
                            });
                        });
                } else {
                    // If user is not the creator, show error toast
                    toast.error('Only the creator can delete this assignment');
                }
            }
        });
    };


    const handleUpdate = (id) => {
        console.log('Update assignment with id:', id);
        // Add navigation or modal logic for updating assignment
    };

    const handleView = (id) => {
        console.log('View assignment with id:', id);
        // Add navigation logic for viewing assignment details
    };

    return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {assignments.map((assignment) => (
                <div key={assignment._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={assignment.thumbnailUrl} alt={assignment.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{assignment.title}</h2>
                        <p className="text-gray-600 mb-2">Marks: {assignment.marks}</p>
                        <p className="text-gray-600 mb-2">Difficulty: {assignment.difficultyLevel}</p>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => handleView(assignment._id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                View
                            </button>
                            <Link to={`/updateAssignment/${assignment._id}`}>
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                    Update
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(assignment)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Assignments;

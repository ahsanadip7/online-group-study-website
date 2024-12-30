import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mark = () => {
    const markAssignment = useLoaderData()
    console.log(markAssignment);
    const id = markAssignment._id
    const handleCompleted = (e) => {
        e.preventDefault()
        const form = e.target
        const status = form.status.value
        console.log(status);
            
            fetch(`http://localhost:5000/submissions/${id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ status}),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Status updated to completed',
                            icon: 'success',
                            confirmButtonText: 'Cool',
                        });
    
                     
                    }
                });
        };

    return (

        <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Mark Assignment
        </h2>
        <form onSubmit={handleCompleted} className="space-y-6">
            {/* Marks Input Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mark
                </label>
                <input
                    type="text"
                    name="mark"
                    placeholder="Enter mark"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>
    
            {/* Feedback Input Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Feedback
                </label>
                <textarea
                    name="feedback"
                    placeholder="Enter feedback"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>
    
            {/* Status Input Field (Hidden) */}
            <input
                type="hidden"
                name="status"
                value="completed"
            />
    
            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Submit Assignment
            </button>
        </form>
    </div>
    
    );
};

export default Mark;
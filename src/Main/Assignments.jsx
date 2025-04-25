import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';

const Assignments = () => {
    const { user } = useContext(AuthContext);

    // State for assignments and filters
    const [assignments, setAssignments] = useState([]);
    const [filteredAssignments, setFilteredAssignments] = useState([]);
    const [difficultyFilter, setDifficultyFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000); // Simulating API call
    }, []);

    // Fetch assignments
    useEffect(() => {
        fetch('https://assignment-11-server-side-nine.vercel.app/assignmentCollection')
            .then(res => res.json())
            .then(data => {
                setAssignments(data);
                setFilteredAssignments(data);
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);

    // Handle Delete
    const handleDelete = (assignment) => {
        const { email, _id } = assignment;

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                if (user.email === email) {
                    fetch(`https://assignment-11-server-side-nine.vercel.app/assignmentCollection/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire("Deleted!", "The assignment has been deleted.", "success");
                                setAssignments(assignments.filter(item => item._id !== _id));
                                setFilteredAssignments(filteredAssignments.filter(item => item._id !== _id));
                            } else {
                                Swal.fire("Error!", "Failed to delete the assignment. Try again later.", "error");
                            }
                        });
                } else {
                    toast.error('Only the creator can delete this assignment');
                }
            }
        });
    };

    // Handle Difficulty Filter
    const handleFilterChange = (e) => {
        const value = e.target.value;
        setDifficultyFilter(value);

        let filtered = assignments;
        if (value) {
            filtered = assignments.filter(a => a.difficultyLevel === value);
        }
        setFilteredAssignments(filtered);
    };

    // Handle Search
    const handleSearchChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchQuery(value);

        const filtered = assignments.filter(a =>
            a.title.toLowerCase().includes(value) ||
            a.description.toLowerCase().includes(value)
        );
        setFilteredAssignments(filtered);
    };

    return (
        <div className="min-h-[calc(100vh-160px)] py-10 bg-gray-50 dark:bg-gray-900">
            <div className="min-h-[calc(100vh-160px)] py-10 max-w-7xl mx-auto p-8 shadow-lg rounded-lg bg-white dark:bg-gray-800">
                {/* Show spinner only when loading */}
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <Spinner /> {/* Show loading spinner */}
                    </div>
                ) : (
                    <div>
                        {/* 🔹 Banner Section */}
                        <div
                            className="relative bg-cover bg-center h-72 md:h-80 lg:h-96 mb-10 rounded-lg shadow-md"
                            style={{ backgroundImage: "url('https://via.placeholder.com/1920x400?text=Assignments')" }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 rounded-lg"></div>
                            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
                                <h1 className="text-3xl md:text-5xl font-bold mb-2">Assignments</h1>
                                <p className="text-base md:text-lg max-w-2xl">
                                    Explore, update, or manage assignments easily. Filter by difficulty or search by keywords.
                                </p>
                            </div>
                        </div>

                        {/* 🔹 Filter & Search Bar */}
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                            <select
                                value={difficultyFilter}
                                onChange={handleFilterChange}
                                className="select select-bordered w-full md:w-52 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            >
                                <option value="">All Levels</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>

                            <input
                                type="text"
                                placeholder="Search assignments..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="input input-bordered px-4 py-2 w-full md:w-1/2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            />
                        </div>

                        {/* 🔹 Assignments Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredAssignments.map((assignment) => (
                                <div
                                    key={assignment._id}
                                    className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                                >
                                    <img
                                        src={assignment.thumbnailUrl}
                                        alt={assignment.title}
                                        className="w-full h-44 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            {assignment.title}
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Marks: {assignment.marks}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Difficulty: {assignment.difficultyLevel}</p>

                                        <div className="flex flex-wrap gap-2">
                                            <Link to={`/viewDetails/${assignment._id}`}>
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-400 transition-colors">
                                                    View
                                                </button>
                                            </Link>
                                            <Link to={`/updateAssignment/${assignment._id}`}>
                                                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 dark:hover:bg-yellow-400 transition-colors">
                                                    Update
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(assignment)}
                                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 dark:hover:bg-red-400 transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Assignments;

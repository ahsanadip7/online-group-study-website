import React, { useContext, useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { AuthContext } from '../AuthProvider/AuthProvider';

// Import DatePicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignment = () => {
    const { user } = useContext(AuthContext);
  
    // State for form data
    const [formData, setFormData] = useState({
        thumbnailUrl: "",
        title: "",
        difficultyLevel: "easy", // Default to easy
        description: "",
        marks: "", // Added marks field
        dueDate: new Date(), // Default dueDate is today's date
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle date change
    const handleDateChange = (date) => {
        setFormData({ ...formData, dueDate: date });
    };

    // Validate form data
    const validateForm = () => {
        const { title, description, marks, thumbnailUrl, dueDate } = formData;

        if (!title.trim()) {
            Swal.fire('Error', 'Title is required.', 'error');
            return false;
        }

        if (!description.trim()) {
            Swal.fire('Error', 'Description is required.', 'error');
            return false;
        }

        if (!marks || marks <= 0) {
            Swal.fire('Error', 'Marks must be a positive number.', 'error');
            return false;
        }

        if (!thumbnailUrl.trim() || !/^https?:\/\//.test(thumbnailUrl)) {
            Swal.fire('Error', 'Please provide a valid URL for the thumbnail.', 'error');
            return false;
        }

        if (!dueDate || new Date(dueDate) < new Date()) {
            Swal.fire('Error', 'Please select a valid future due date.', 'error');
            return false;
        }

        return true;
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return; // Validate before submission

        const { thumbnailUrl, title, description, difficultyLevel, marks, dueDate } = formData;
        const email = user?.email;
        const name = user?.displayName;

        const addAssignment = { 
            thumbnailUrl, 
            difficultyLevel, 
            title, 
            description, 
            marks, // Include marks
            dueDate: dueDate.toISOString(), // Store dueDate as ISO string
            email, 
            name 
        };

        console.log(addAssignment);

        fetch('https://assignment-11-server-side-nine.vercel.app/assignmentCollection', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addAssignment)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        });
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
           

            {/* Form Section */}
            <div className="py-12">
                <motion.div
                    className="max-w-3xl mx-auto my-10 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                        <FaPlusCircle className="text-lime-600 dark:text-lime-400" />
                        Add A Assignment
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Title */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
                            <label className="block font-medium mb-2">Assignment Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter assignment title"
                                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
                            <label className="block font-medium mb-2">Description</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter assignment details"
                                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            />
                        </motion.div>

                        {/* Marks */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
                            <label className="block font-medium mb-2">Marks</label>
                            <input
                                type="number"
                                name="marks"
                                value={formData.marks}
                                onChange={handleChange}
                                placeholder="Enter assignment marks"
                                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            />
                        </motion.div>

                        {/* Thumbnail */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
                            <label className="block font-medium mb-2">Image/Thumbnail URL</label>
                            <input
                                type="url"
                                name="thumbnailUrl"
                                value={formData.thumbnailUrl}
                                onChange={handleChange}
                                placeholder="Enter image URL"
                                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            />
                        </motion.div>

                        {/* Difficulty Level */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                            <label className="block font-medium mb-2">Assignment Difficulty Level</label>
                            <select
                                name="difficultyLevel"
                                value={formData.difficultyLevel}
                                onChange={handleChange}
                                className="select select-bordered w-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            >
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </motion.div>

                        {/* Deadline with Date Picker */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>
                            <label className="block font-medium mb-2">Deadline</label>
                            <DatePicker
                                selected={formData.dueDate}
                                onChange={handleDateChange}
                                dateFormat="yyyy-MM-dd"
                                minDate={new Date()} // Prevent past dates
                                isClearable
                                placeholderText="Select a dueDate"
                                className="input input-bordered w-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="btn btn-primary w-full bg-white  dark:bg-indigo-300 hover:bg-indigo-700 dark:hover:bg-indigo-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.8 }}>
                            Add Assignment
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default CreateAssignment;

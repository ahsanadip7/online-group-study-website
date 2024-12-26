import React, { useContext, useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import Swal from 'sweetalert2';
import { motion } from 'framer-motion'; // Import framer-motion
import { AuthContext } from '../AuthProvider/AuthProvider';

const CreateAssignment = () => {
    const { user } = useContext(AuthContext);
  

    const [formData, setFormData] = useState({
        thumbnail: "",
        title: "",
        type: "personal issue",
        description: "",
        minDonation: "",
        deadline: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const type = form.type.value;
        const email = user?.email
        const name = user?.displayName;
        const addAssignment = { thumbnail, type, title, description, deadline, email, name };
        console.log(addAssignment);

        fetch('http://localhost:5000/assignmentCollection', {
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
                        text: 'Campaign added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    };
    return (
        <div>
            {/* Banner Section */}
            <motion.div
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: "url('https://via.placeholder.com/1920x400?text=Add+New+Campaign')" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Launch Your Campaign</h1>
                    <p className="mt-2 text-lg md:text-xl">
                        Share your vision and inspire others to contribute to your journey.
                    </p>
                </div>
            </motion.div>

            {/* Form Section with Animation */}
            <div className="bg-gray-300 py-12">
                <motion.div
                    className="max-w-3xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <FaPlusCircle className="text-lime-600" />
                        Add A Assignment
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Campaign Title */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}>
                            <label className="block font-medium mb-2">Assignment Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter campaign title"
                                className="input input-bordered w-full"
                                required
                            />
                        </motion.div>


                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}>
                            <label className="block font-medium mb-2">Description</label>
                            <input
                                type="url"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter your assignment's google doc link URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </motion.div>

                        {/* Thumbnail */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}>
                            <label className="block font-medium mb-2">Image/Thumbnail URL</label>
                            <input
                                type="url"
                                name="thumbnail"
                                value={formData.thumbnail}
                                onChange={handleChange}
                                placeholder="Enter image URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </motion.div>

                        {/* Campaign Type */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}>
                            <label className="block font-medium mb-2">Assignment difficulty level</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </select>
                        </motion.div>


                        {/* Deadline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}>
                            <label className="block font-medium mb-2">Deadline</label>
                            <input
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </motion.div>

                      
                        {/* Add Button */}
                        <motion.button
                            type="submit"
                            className="btn btn-primary w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.8 }}>
                            Add Campaign
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default CreateAssignment;
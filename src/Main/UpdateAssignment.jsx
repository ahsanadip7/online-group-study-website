import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
    const assignment = useLoaderData();
    const { thumbnailUrl, title, description, difficultyLevel, _id } = assignment;
    const navigate = useNavigate();

    // State for form data
    const [formData, setFormData] = useState({
        thumbnail: "",
        title: "",
        difficultyLevel: "easy", // Default to easy
        description: "",
        dueDate: new Date(), // Default dueDate is today's date
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit form
    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const difficultyLevel = form.difficultyLevel.value;
        const description = form.description.value;
        const thumbnailUrl = form.thumbnailUrl.value;
        const title = form.title.value;

        const addAssignment = {
            thumbnailUrl,
            difficultyLevel,
            title,
            description
        };

        fetch(`https://assignment-11-server-side-nine.vercel.app/assignmentCollection/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addAssignment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    navigate('/assignments');
                }
            });
    };

    return (
        <div className="min-h-[calc(100vh-160px)]">
        {/* Banner Section */}
        <motion.div
          className="relative bg-cover bg-center h-64"
          style={{ backgroundImage: "url('https://via.placeholder.com/1920x400?text=Update+Assignment')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 dark:from-gray-900/80 dark:to-gray-700/60 rounded-lg"></div>
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">Update Your Assignment</h1>
          </div>
        </motion.div>
      
        {/* Form Section */}
        <div className="bg-gray-100 dark:bg-gray-900 py-12">
          <motion.div
            className="max-w-3xl mx-auto my-10 p-8 bg-white dark:bg-gray-800 shadow-xl rounded-2xl transition-colors duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
              <FaPlusCircle className="text-lime-600" />
              Update Assignment
            </h2>
      
            <form onSubmit={handleUpdate} className="space-y-6">
              {/* Title */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
                <label className="block font-medium mb-2 text-gray-800 dark:text-gray-200">Assignment Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  onChange={handleChange}
                  placeholder="Enter assignment title"
                  className="input input-bordered w-full  bg-white  dark:bg-gray-700 dark:text-white"
                  required
                />
              </motion.div>
      
              {/* Description */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
                <label className="block font-medium mb-2 text-gray-800 dark:text-gray-200">Description</label>
                <input
                  type="url"
                  name="description"
                  defaultValue={description}
                  onChange={handleChange}
                  placeholder="Enter assignment details"
                  className="input input-bordered w-full  bg-white  dark:bg-gray-700 dark:text-white"
                  required
                />
              </motion.div>
      
              {/* Thumbnail URL */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
                <label className="block font-medium mb-2 text-gray-800 dark:text-gray-200">Image/Thumbnail URL</label>
                <input
                  type="url"
                  name="thumbnailUrl"
                  defaultValue={thumbnailUrl}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                  className="input input-bordered w-full bg-white  dark:bg-gray-700 dark:text-white"
                  required
                />
              </motion.div>
      
              {/* Difficulty Level */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                <label className="block font-medium mb-2 text-gray-800 dark:text-gray-200">Assignment Difficulty Level</label>
                <select
                  name="difficultyLevel"
                  defaultValue={difficultyLevel}
                  onChange={handleChange}
                  className="select select-bordered w-full bg-white  dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </motion.div>
      
              {/* Submit Button */}
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                Update Assignment
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      
    );
};

export default UpdateAssignment;

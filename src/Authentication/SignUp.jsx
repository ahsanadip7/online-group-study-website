import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { auth } from '../__firebase.init';
import { motion } from 'framer-motion';
import { AuthContext } from '../Main/AuthProvider/AuthProvider';

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [errMassage, setErrMassage] = useState('');
  const navigate = useNavigate();

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    setErrMassage('');

    if (password.length < 6) {
      setErrMassage('Password should be more than 6 characters');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrMassage('Password must have at least one uppercase, one lowercase, one number, and one special character');
      return;
    }

    createUser(email, password, name, photo)
      .then(() => {
        toast.success('Successfully created account');
        event.target.reset();
        navigate('/');
        const profile = { displayName: name, photoURL: photo };
        updateProfile(auth.currentUser, profile)
          .then(() => console.log('User profile updated'))
          .catch((error) => console.log('Error updating profile:', error));
      })
      .catch((error) => {
        console.log('Error:', error.message);
      });
  };

  const handleGoogleSign = () => {
    signInWithGoogle()
      .then(() => navigate('/'))
      .catch((error) => console.log('Error:', error.message));
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-200 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col items-center py-16">
      {/* Banner Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Create an Account
        </motion.h1>
        <motion.p
          className="py-6 text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Join us to make a positive impact! Fill in the details below to get started with your account.
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 dark:text-indigo-400 underline">
            Log in
          </Link>
        </motion.p>
      </motion.div>

      {/* Registration Form Section */}
      <motion.div
        className="card bg-white dark:bg-gray-900 w-full max-w-sm shadow-2xl rounded-xl mx-auto p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <form onSubmit={handleSubmitBtn} className="space-y-6 relative">
          {/* Name Input */}
          <motion.div
            className="form-control"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600 dark:text-gray-300">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4"
              required
            />
          </motion.div>

          {/* Photo URL Input */}
          <motion.div
            className="form-control"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600 dark:text-gray-300">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4"
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            className="form-control"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
          >
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600 dark:text-gray-300">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4"
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            className="form-control"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.8 }}
          >
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600 dark:text-gray-300">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input input-bordered w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4"
              required
            />
          </motion.div>

          {/* Error Message */}
          <div className="text-sm text-red-600 dark:text-red-400">{errMassage}</div>

          {/* Register Button */}
          <motion.div
            className="form-control mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.8 }}
          >
            <button className="btn btn-primary w-full rounded-lg py-3 text-white font-semibold transition duration-300 hover:bg-indigo-600 focus:outline-none">
              Register
            </button>
          </motion.div>
        </form>

        {/* Google Sign-In Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <button
            onClick={handleGoogleSign}
            className="btn btn-ghost w-full mt-3 bg-slate-50 dark:bg-gray-700 rounded-2xl mb-4 py-3 flex items-center justify-center text-indigo-600 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500"
          >
            <FaGoogle className="mr-3" /> Sign up with Google
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;

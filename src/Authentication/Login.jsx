import React, { useContext, useRef, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaGoogle, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; // SweetAlert2 import
import { auth } from '../__firebase.init';
import { AuthContext } from '../Main/AuthProvider/AuthProvider';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();

    const handleLogInBtn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then(() => {
                navigate('/');
                event.target.reset();
            })
            .catch((error) => {
                console.log(error.code);
                if (error.code === 'auth/invalid-credential') {
                    Swal.fire({
                        icon: 'error',
                        title: 'User not found!',
                        text: 'Please check your email and password or sign up for an account.',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed!',
                        text: 'Something went wrong. Please try again later.',
                    });
                }
            });
    };

    const handleForgetBtn = () => {
        const email = emailRef.current.value;
        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'Email Required!',
                text: 'Please enter a valid email to reset your password.',
            });
        } else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Password Reset Email Sent!',
                        text: 'Check your email to reset your password.',
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: error.message,
                    });
                });
        }
    };

    const handleGoogleSign = () => {
        signInWithGoogle()
            .then(() => {
                navigate('/');
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center py-16 transition-colors duration-500">
            {/* Banner Section */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-400"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome Back!
                </motion.h1>
                <motion.p
                    className="py-6 text-lg text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Log in to your account to access your personalized dashboard, manage your profile, and stay updated with the latest campaigns.
                </motion.p>
                <motion.p
                    className="text-sm pb-10 text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Don’t have an account yet?{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">
                        <Link to="/signUp">Sign up now</Link>
                    </span>{" "}
                    to join our community and make a difference! Or back to{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">
                        <Link to="/">Home</Link>
                    </span>
                </motion.p>
            </motion.div>

            {/* Login Form Section */}
            <motion.div
                className="card bg-white dark:bg-gray-800 w-full max-w-sm shadow-2xl rounded-xl mx-auto p-8 transition-colors duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <form onSubmit={handleLogInBtn} className="space-y-6 relative">
                    {/* Email Input */}
                    <motion.div
                        className="form-control"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600 dark:text-gray-300">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder="Enter your email"
                            className="input input-bordered w-full rounded-lg border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                            required
                        />
                    </motion.div>

                    {/* Password Input */}
                    <motion.div
                        className="form-control"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                    >
                        <label className="label">
                            <span className="label-text text-lg font-medium text-gray-600 dark:text-gray-300">Password</span>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full text-black rounded-lg border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none py-2 px-4 bg-white dark:bg-gray-800  dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                            required
                        />

                        <label
                            onClick={handleForgetBtn}
                            className="label text-sm text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline"
                        >
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </motion.div>

                    {/* Login Button */}
                    <motion.div
                        className="form-control mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.8 }}
                    >
                        <button className="btn btn-primary w-full rounded-lg py-3 text-white font-semibold transition duration-300 hover:bg-indigo-600 focus:outline-none">
                            Login
                        </button>
                    </motion.div>
                </form>

                {/* Google Sign-In Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.3, duration: 0.8 }}
                >
                    <button
                        onClick={handleGoogleSign}
                        className="btn btn-ghost w-full mt-3 bg-slate-50 dark:bg-gray-700 rounded-2xl mb-4 py-3 flex items-center justify-center text-indigo-600 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500"
                    >
                        <FaGoogle className="mr-3" /> Sign in with Google
                    </button>
                </motion.div>

                {/* Password Visibility Toggle */}
                <motion.button
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-sm absolute right-10 bottom-[220px] bg-white text-indigo-600 dark:text-indigo-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Login;

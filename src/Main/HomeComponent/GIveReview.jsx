import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const GiveReview = () => {
    const [review, setReview] = useState({ name: "", comment: "", rating: 0 });
    const [hover, setHover] = useState(null);

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const handleRating = (ratingValue) => {
        setReview({ ...review, rating: ratingValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            ...review,
            rating: Number(review.rating),
        };

        try {
            const response = await fetch("https://assignment-11-server-side-nine.vercel.app/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reviewData),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.result && data.result.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review submitted successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    setReview({ name: "", comment: "", rating: 0 });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'There was an issue with the review submission.',
                        icon: 'error',
                        confirmButtonText: 'Okay',
                    });
                }
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to submit review. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            }
        } catch (error) {
            console.error("Error submitting review:", error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 p-8 mb-10 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-10 transition duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
                Give Your Review
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <input
                    type="text"
                    name="name"
                    value={review.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200"
                    required
                />
                <textarea
                    name="comment"
                    value={review.comment}
                    onChange={handleChange}
                    placeholder="Your Review"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200"
                    required
                ></textarea>

                {/* Star Rating */}
                <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            size={30}
                            className={`cursor-pointer transition transform hover:scale-110 ${
                                star <= (hover || review.rating) ? "text-yellow-400" : "text-gray-400 dark:text-gray-600"
                            }`}
                            onClick={() => handleRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(null)}
                        />
                    ))}
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default GiveReview;

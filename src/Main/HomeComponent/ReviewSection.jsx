import React, { useEffect, useState } from 'react';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-side-nine.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data.slice(0, 5)); // Only take the first 5 reviews
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full  mx-auto  transition duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
                Recent Reviews
            </h2>
            
            {reviews.length === 0 ? (
                <p className="text-center text-gray-600 dark:text-gray-400">No reviews yet.</p>
            ) : (
                <div className="space-y-5">
                    {reviews.map((review) => (
                        <div 
                            key={review._id} 
                            className="p-5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {review.name}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">
                                {review.comment}
                            </p>
                            <p className="text-yellow-500 font-bold mt-3">⭐ {review.rating}/5</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReviewSection;

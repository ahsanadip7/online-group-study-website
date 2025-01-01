import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is this application about?",
            answer: "This application is an online group study platform designed to help students collaborate, manage assignments, and track deadlines effectively."
        },
        {
            question: "How do I create an assignment?",
            answer: "You can create assignments using the 'Create Assignment' form, where you can add details like title, description, difficulty level, and deadline."
        },
        {
            question: "Can I edit or delete my assignments?",
            answer: "Yes, you can edit or delete assignments that you have created. Just navigate to the assignment and use the provided buttons to make changes."
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely! We ensure secure access to your data with authentication and authorization mechanisms to protect your information."
        },
        {
            question: "How do I track my progress?",
            answer: "You can monitor your performance and deadlines directly from your dashboard, which provides insights into your activities and progress."
        }
    ];

    return (
        <div className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                            <button
                                className="w-full flex justify-between items-center px-4 py-5 text-left text-gray-800 font-medium focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <FaChevronUp className="text-gray-500" />
                                ) : (
                                    <FaChevronDown className="text-gray-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-4 py-3 text-gray-600 bg-gray-50 border-t">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;

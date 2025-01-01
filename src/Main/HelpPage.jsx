import React from 'react';

const HelpPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-6">How to Get Help</h1>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Explore FAQs</h2>
          <p className="mb-4">
            Visit our <a href="/faq" className="text-blue-600 dark:text-blue-400 underline">FAQ</a> section for quick answers to common questions.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Contact Support</h2>
          <p className="mb-4">
            If you need further assistance, feel free to reach out to our support team via email:
            <a href="mailto:support@learntogether.com" className="text-blue-600 dark:text-blue-400 underline ml-2">support@learntogether.com</a>.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Join a Live Chat</h2>
          <p className="mb-4">
            Use our live chat feature available during working hours to get instant help. Look for the chat icon at the bottom-right corner of the screen.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Community Forum</h2>
          <p className="mb-4">
            Join discussions in our community forum to share insights, ask questions, and get advice from fellow learners.
            <a href="/forum" className="text-blue-600 dark:text-blue-400 underline ml-2">Visit Forum</a>
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Tutorials and Guides</h2>
          <p className="mb-4">
            Access step-by-step tutorials and video guides in our <a href="/resources" className="text-blue-600 dark:text-blue-400 underline">Resources</a> section.
          </p>
        </section>
  
        <footer className="mt-8 border-t pt-4 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 LearnTogether. All Rights Reserved.</p>
        </footer>
      </div>
    );
};

export default HelpPage;
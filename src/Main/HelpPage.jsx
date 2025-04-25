import React from 'react';

const HelpPage = () => {
  return (
    <div className="container pt-24 mx-auto px-4 py-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-20 text-center text-indigo-600 dark:text-indigo-400">How to Get Help</h1>

      <section className="mb-8 bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">1. Explore FAQs</h2>
        <p className="mb-4">
          Visit our <a href="/faq" className="text-blue-600 dark:text-blue-400 underline">FAQ</a> section for quick answers to common questions.
        </p>
      </section>

      <section className="mb-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">2. Contact Support</h2>
        <p className="mb-4">
          If you need further assistance, feel free to reach out to our support team via email:
          <a href="mailto:support@learntogether.com" className="text-blue-600 dark:text-blue-400 underline ml-2">support@learntogether.com</a>.
        </p>
      </section>

      <section className="mb-8 bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">3. Join a Live Chat</h2>
        <p className="mb-4">
          Use our live chat feature available during working hours to get instant help. Look for the chat icon at the bottom-right corner of the screen.
        </p>
      </section>

      <section className="mb-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">4. Community Forum</h2>
        <p className="mb-4">
          Join discussions in our community forum to share insights, ask questions, and get advice from fellow learners.
          <a href="/forum" className="text-blue-600 dark:text-blue-400 underline ml-2">Visit Forum</a>
        </p>
      </section>

      <section className="mb-8 bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">5. Tutorials and Guides</h2>
        <p className="mb-4">
          Access step-by-step tutorials and video guides in our <a href="/resources" className="text-blue-600 dark:text-blue-400 underline">Resources</a> section.
        </p>
      </section>

      {/* New Section: How to Get Started */}
      <section className="mb-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">How to Get Started</h2>
        <p className="mb-4">
          Begin your learning journey by signing up for a free account and exploring our range of courses, tailored to your learning needs.
        </p>
        <p className="mb-4">
          <a href="/signup" className="text-blue-600 dark:text-blue-400 underline">Sign Up</a> and start exploring today!
        </p>
      </section>

      {/* New Section: Live Webinars */}
      <section className="mb-8 bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Live Webinars</h2>
        <p className="mb-4">
          Join our upcoming live webinars where industry experts and instructors cover trending topics and offer helpful advice. Don’t miss out on the chance to ask questions live!
        </p>
        <p className="mb-4">
          Check out our <a href="/webinars" className="text-blue-600 dark:text-blue-400 underline">Live Webinars</a> page for more details and registration.
        </p>
      </section>

      <section className="mb-8 bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Getting Involved in Challenges</h2>
        <p className="mb-4">
          Participate in exciting learning challenges that will help you test and expand your skills while competing with others.
        </p>
        <p className="mb-4">
          Join the upcoming challenges by visiting our <a href="/challenges" className="text-blue-600 dark:text-blue-400 underline">Challenges</a> page.
        </p>
      </section>

    </div>
  );
};

export default HelpPage;

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">About Us</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              LearnTogether is a collaborative platform for online group study. Connect with peers, share resources, and achieve your learning goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">Home</Link></li>
              <li><Link to="/sessions" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">Sessions</Link></li>
              <li><Link to="/resources" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Support</h2>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">FAQs</Link></li>
              <li><Link to="/terms" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300">Email: support@learntogether.com</p>
            <p className="text-gray-700 dark:text-gray-300">Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-700 dark:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-gray-700 dark:text-gray-300">
          <p>&copy; 2025 LearnTogether. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

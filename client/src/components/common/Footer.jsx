import { FaFacebookF, FaTwitter, FaGooglePlusG, FaMapMarkerAlt, FaPhone, FaEnvelope, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Call-to-Action Section */}
      <div className="border-b border-gray-700 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-orange-500 text-3xl" />
            <div>
              <h4 className="text-white text-lg font-semibold">Find us</h4>
              <span className="text-gray-400 text-sm">1010 Avenue, SW 54321, Chandigarh</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-orange-500 text-3xl" />
            <div>
              <h4 className="text-white text-lg font-semibold">Call us</h4>
              <span className="text-gray-400 text-sm">9876543210</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-orange-500 text-3xl" />
            <div>
              <h4 className="text-white text-lg font-semibold">Mail us</h4>
              <span className="text-gray-400 text-sm">mail@info.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Logo + About */}
          <div>
            <div className="mb-6">
              <img
                alt="Logo"
                className="w-32"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6">
                Fitness and Wellness Hub
            </p>
            <div>
              <span className="text-white font-semibold">Follow us</span>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                  <FaFacebookF className="text-white" />
                </a>
                <a href="#" className="bg-sky-400 p-2 rounded-full hover:bg-sky-500">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700">
                  <FaGooglePlusG className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Latest News</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Don’t miss to subscribe to our new feeds, kindly fill the form below.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white"
              >
                <FaTelegramPlane />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm text-gray-400">
          <p>
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.
          </p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">Terms</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
            <li><a href="#" className="hover:text-orange-500">Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

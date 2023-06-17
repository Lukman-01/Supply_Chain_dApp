import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-col justify-between h-full bg-gray-900 text-white">
      <div className="py-4 px-2">
        <Link to="/" className="text-2xl font-bold text-white mb-6">
          My App
        </Link>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/market" className="text-white hover:text-gray-300">
              Market
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
      <div className="py-4 px-2">
        <Link
          to="/login"
          className="block bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-white text-center mb-4"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="block bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white text-center"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;

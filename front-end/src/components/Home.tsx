import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to My App</h2>
      <p className="text-xl text-center mb-8">
        This DApp allows you to manage your supply chain efficiently. Register to get started.
      </p>
      <Link
        to="/register"
        className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md text-white"
      >
        Register
      </Link>
    </div>
  );
};

export default Home;

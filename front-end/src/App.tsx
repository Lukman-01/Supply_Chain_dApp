import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Services from './components/Services';
// import Home from './components/Home';
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex-grow">
      <Navbar />
      {/* <Home /> */}
      {/* <Services /> */}
      <Footer />
    </div>
  );
};

export default App;

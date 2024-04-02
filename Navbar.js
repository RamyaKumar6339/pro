import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar"> {/* Apply the navbar class */}
      <div>
        <Link to="/">Home</Link> {/* Use Link for internal navigation */}
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      <div>
        {/* Add any additional elements or links here */}
      </div>
    </div>
  );
};

export default Navbar;

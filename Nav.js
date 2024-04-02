import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import the CSS file

const Nav = () => {
  return (
    <div className="navbar"> {/* Apply the navbar class */}
      <div>
        <Link to="/">Home</Link> {/* Use Link for internal navigation */}
        <Link to="/AboutUs">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Profile">Profile</Link>
      </div>
      <div>
        {/* Add any additional elements or links here */}
      </div>
    </div>
  );
};

export default Nav;

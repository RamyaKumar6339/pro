import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SignUp.css'; // Import your CSS file

function SignUp() {
  const handleSignUp = () => {
    // Perform signup logic here
    console.log('Sign Up button clicked');
  };

  return (
    <div className="container4">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Email" required />
        <input type="name" placeholder="Name" required />
        <input type="name" placeholder="UserName" required />
        <Link to="/Main">
        <button type="submit" onClick={handleSignUp}>Sign Up</button>
        </Link>
      </form>
      <center><p>Already have an account? <Link to="/login">Login</Link></p></center>
    </div>
  );
}

export default SignUp;

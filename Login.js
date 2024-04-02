import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css'; // Import your CSS file

function Login() {
  const handleLogin = () => {
    // Perform login logic here
    console.log('Login button clicked');
  };

  return (
    <div className="container2">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        {/* Use Link to navigate to the main page */}
        <Link to="/Main">
          <button type="button" onClick={handleLogin}>Login</button>
        </Link>
      </form>
      <center><p>Not a member? <Link to="/signup">Sign Up</Link></p></center>
    </div>
  );
}

export default Login;

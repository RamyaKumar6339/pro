import React, { useState } from 'react';
import './CheckBalance.css'; // Import the CSS file for styling

const CheckBalancePage = () => {
  const [userName, setUserName] = useState('');
  const [balance, setBalance] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming balance data is fetched from an API or context based on the entered user name
    // Here, we simulate fetching balance data based on the entered user name
    // In a real application, this would be replaced with actual API calls
    if (userName === '040105') {
      setBalance(15000);
    } else {
      setBalance(null); // User not found
    }
  };

  return (
    <div className="check-balance-page">
      <h2>Check Your Balance</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <center>Enter Your PIN</center>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Check Balance</button>
      </form>
      {balance !== null && (
        <div className="balance-result">
          <p>Your balance is: {balance}</p>
        </div>
      )}
      {balance === null && userName !== '' && (
        <div className="balance-result">
          <p>User not found. Please check your user name.</p>
        </div>
      )}
    </div>
  );
};

export default CheckBalancePage;

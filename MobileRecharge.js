import React, { useState } from 'react';
import './MobileRecharge.css'; // Import the CSS file for styling

const MobileRecharge = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [provider, setProvider] = useState('');
  const [amount, setAmount] = useState('');
  const [operator, setOperator] = useState('');
  const [rechargeDetails, setRechargeDetails] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRecharge = () => {
    if (!mobileNumber || !provider || !amount) {
      alert('Please fill in all required fields');
      return;
    }

    // Process recharge logic here
    const details = {
      mobileNumber,
      provider,
      amount,
      operator,
    };

    // Simulate recharge processing
    setIsSubmitted(true);
    setTimeout(() => {
      setRechargeDetails(details);
      setIsSubmitted(false);
      setMobileNumber('');
      setProvider('');
      setAmount('');
      setOperator('');
    }, 2000);
  };

  return (
    <div className="mobile-recharge-container">
      <h1>Mobile Recharge</h1>
      {!isSubmitted ? (
        <>
          <form onSubmit={(e) => { e.preventDefault(); handleRecharge(); }}>
            <label>
              Mobile Number:
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter mobile number"
                required
              />
            </label>
            <br />
            <label>
              Service Provider:
              <select value={provider} onChange={(e) => setProvider(e.target.value)} required>
                <option value="">Select Provider</option>
                <option value="Airtel">Airtel</option>
                <option value="Vodafone">Vodafone</option>
                <option value="Idea">Idea</option>
                <option value="Jio">Jio</option>
              </select>
            </label>
            <br />
            <label>
              Amount:
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter recharge amount"
                required
              />
            </label>
            <br />
            <label>
              Mobile Operator:
              <select value={operator} onChange={(e) => setOperator(e.target.value)} required>
                <option value="">Select Operator</option>
                <option value="Prepaid">Prepaid</option>
                <option value="Postpaid">Postpaid</option>
              </select>
            </label>
            <br />
            <button type="submit">Recharge</button>
          </form>
        </>
      ) : (
        <div className="recharge-success">
          <p>Recharge successful!</p>
          <h2>Recharge Details</h2>
          {rechargeDetails && (
            <>
              <p>Mobile Number: {rechargeDetails.mobileNumber}</p>
              <p>Provider: {rechargeDetails.provider}</p>
              <p>Amount: {rechargeDetails.amount}</p>
              <p>Operator: {rechargeDetails.operator}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileRecharge;

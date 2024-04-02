import React, { useState } from 'react';
import './PayBills.css'; // Import the CSS file for styling

const PayBills = () => {
  const [billType, setBillType] = useState('');
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const handlePayBill = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!billType || !amount || !accountNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    // Perform payment logic (e.g., API call)
    // For demonstration purposes, simulate a successful payment after 2 seconds
    setIsPaid(true);
    setTimeout(() => {
      setIsPaid(false);
      setBillType('');
      setAmount('');
      setAccountNumber('');
      alert('Payment successful!');
    }, 2000);
  };

  return (
    <div className="pay-bills-container">
      <h1>Pay Bills</h1>
      {!isPaid ? (
        <form onSubmit={handlePayBill}>
          <label>
            Bill Type:
            <select
              value={billType}
              onChange={(e) => setBillType(e.target.value)}
              required
            >
              <option value="">Select Bill Type</option>
              <option value="Electricity">Electricity</option>
              <option value="Water">Water</option>
              <option value="Gas">Gas</option>
              <option value="Internet">Internet</option>
              {/* Add more bill types as needed */}
            </select>
          </label>
          <br />
          <label>
            Amount:
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </label>
          <br />
          <label>
            Account Number:
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter account number"
              required
            />
          </label>
          <br />
          <button type="submit">Pay</button>
        </form>
      ) : (
        <div className="payment-success">
          <p>Payment successful!</p>
        </div>
      )}
    </div>
  );
};

export default PayBills;

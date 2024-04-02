import React, { useState } from 'react';
import './BankTransfer.css'; // Import the CSS file for styling

const BankTransfer = () => {
  const [recipientName, setRecipientName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [bankName, setBankName] = useState('');
  const [branch, setBranch] = useState('');
  const [reference, setReference] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(accountNumber) || isNaN(amount)) {
      alert('Account Number and Amount should be numbers');
      return;
    }
  
    if (accountNumber.length !== 11) {
      alert('Account Number should be exactly 11 digits');
      return;
    }
  
    if (amount.length !== 5) {
      alert('Amount should be a 5-digit number');
      return;
    }
  
    console.log('Recipient Name:', recipientName);
    console.log('Account Number:', accountNumber);
    console.log('Amount:', amount);
    console.log('Bank Name:', bankName);
    console.log('Branch:', branch);
    console.log('Reference:', reference);
    // Add logic to handle the bank transfer

    // Simulating a successful submission for demonstration purposes
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000); // Reset the form after 2 seconds
  };

  return (
    <div className="bank-transfer-container">
      <h1>Bank Transfer</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Recipient Name:
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
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
              required
            />
          </label>
          <br />
          <label>
            Amount:
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Bank Name:
            <select value={bankName} onChange={(e) => setBankName(e.target.value)} required>
              <option value="">Select Bank</option>
              <option value="Bank A">Indian Bank</option>
              <option value="Bank B">State Bank </option>
              <option value="Bank C">Origin Bank </option>
              <option value="Bank C">Canara Bank </option>
              <option value="Bank C">Axis Bank </option>
              <option value="Bank C">HDFC Bank </option>
              <option value="Bank C">ICICI Bank </option>
              <option value="Bank C">IOB Bank </option>
            </select>
          </label>
          <br />
          <label>
            Branch:
            <select value={branch} onChange={(e) => setBranch(e.target.value)} required>
            <option value="">Select Branch</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Madurai">Madurai</option>
            <option value="Tiruchirappalli">Tiruchirappalli</option>
            <option value="Salem">Salem</option>
            <option value="Tirunelveli">Tirunelveli</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Erode">Erode</option>
            <option value="Vellore">Vellore</option>
            <option value="Thoothukudi">Thoothukudi</option>
            </select>
          </label>
          <br />
          <label>
            Reference:
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Transfer</button>
        </form>
      ) : (
        <div className="done-animation">
          <p>Transfer successful!</p>
        </div>
      )}
    </div>
  );
};

export default BankTransfer;

// OpenAccount.js
import React, { useState } from 'react';
import './OpenAccount.css';
const OpenAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    accountType: '',
    initialDeposit: '',
    aadharCard: '',
    panCard: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type == 'file' ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="open-account-container">
      <h2>Open a New Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>

        <label htmlFor="accountType">Account Type:</label>
        <select id="accountType" name="accountType" value={formData.accountType} onChange={handleChange} required>
          <option value="">Select Account Type</option>
          <option value="savings">Savings Account</option>
          <option value="current">Current Account</option>
        </select>

        <label htmlFor="initialDeposit">Initial Deposit:</label>
        <input type="number" id="initialDeposit" name="initialDeposit" value={formData.initialDeposit} onChange={handleChange} required />

        <label htmlFor="aadharCard">Aadhar Card (PDF or Image):</label>
        <input type="file" id="aadharCard" name="aadharCard" accept="application/pdf,image/*" onChange={handleChange} required />

        <label htmlFor="panCard">PAN Card (PDF or Image):</label>
        <input type="file" id="panCard" name="panCard" accept="application/pdf,image/*" onChange={handleChange} required />

        <label htmlFor="photo">Photo (Image):</label>
        <input type="file" id="photo" name="photo" accept="image/*" onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OpenAccount;

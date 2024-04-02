// DebitCardForm.js
import React, { useState } from 'react';
import './DebitCardForm.css';

const DebitCardForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    accountNumber: '',
    reasonForCard: '',
    aadharProof: null,
    panProof: null,
    photo: null,
    occupation: '',
    annualIncome: '',
    existingAccount: '',
    cardType: '',
    cardDelivery: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="debit-card-form-container">
      <h2>Debit Card Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label>
        <label>
          Account Number:
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
        </label>
        <label>
          Reason for Card:
          <textarea name="reasonForCard" value={formData.reasonForCard} onChange={handleChange} required />
        </label>
        <label>
          Aadhar Card Proof:
          <input type="file" name="aadharProof" onChange={handleFileChange} accept=".pdf,.jpg,.png" required />
        </label>
        <label>
          PAN Card Proof:
          <input type="file" name="panProof" onChange={handleFileChange} accept=".pdf,.jpg,.png" required />
        </label>
        <label>
          Photo:
          <input type="file" name="photo" onChange={handleFileChange} accept=".jpg,.png" required />
        </label>
        <label>
          Occupation:
          <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />
        </label>
        <label>
          Annual Income:
          <input type="text" name="annualIncome" value={formData.annualIncome} onChange={handleChange} required />
        </label>
        <label>
          Do you have an existing account with us?
          <select name="existingAccount" value={formData.existingAccount} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label>
          Card Type:
          <select name="cardType" value={formData.cardType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="rupay">Rupay</option>
          </select>
        </label>
        <label>
          Card Delivery Preference:
          <select name="cardDelivery" value={formData.cardDelivery} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="home">Home Delivery</option>
            <option value="branch">Branch Pickup</option>
          </select>
        </label>
        <label>
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleCheckboxChange} required />
          I accept the terms and conditions
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DebitCardForm;

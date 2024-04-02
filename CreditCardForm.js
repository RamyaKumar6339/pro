// CreditCardForm.js
import React, { useState } from 'react';
import './CreditCardForm.css';

const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    aadharCardProof: null,
    panCardProof: null,
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="credit-card-form-container">
      <h2>Credit Card Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />

        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} />

        <label htmlFor="zip">ZIP Code:</label>
        <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} />

        <label htmlFor="aadharCardProof">Aadhar Card Proof:</label>
        <input type="file" id="aadharCardProof" name="aadharCardProof" onChange={handleChange} accept=".pdf,.jpg,.png" required />

        <label htmlFor="panCardProof">PAN Card Proof:</label>
        <input type="file" id="panCardProof" name="panCardProof" onChange={handleChange} accept=".pdf,.jpg,.png" required />

        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" name="photo" onChange={handleChange} accept=".jpg,.png" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreditCardForm;

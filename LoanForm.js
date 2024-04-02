// Loan.js
import React, { useState } from 'react';
import './LoanForm.css'; // Import the CSS file

const LoanForm = () => {
  const [loanType, setLoanType] = useState('');
  const [amount, setAmount] = useState('');
  const [income, setIncome] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [employmentDuration, setEmploymentDuration] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [aadharCard, setAadharCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Loan application submitted');
  };

  return (
    <div className="loan-container">
      <h2>Loan Application</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="loanType">Loan Type:</label>
        <select id="loanType" value={loanType} onChange={(e) => setLoanType(e.target.value)}>
          <option value="personal">Personal Loan</option>
          <option value="home">Home Loan</option>
          <option value="car">Car Loan</option>
        </select>

        <label htmlFor="amount">Loan Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />

        <label htmlFor="income">Annual Income:</label>
        <input type="number" id="income" value={income} onChange={(e) => setIncome(e.target.value)} required />

        <label htmlFor="employmentType">Employment Type:</label>
        <select id="employmentType" value={employmentType} onChange={(e) => setEmploymentType(e.target.value)}>
          <option value="salaried">Salaried</option>
          <option value="selfEmployed">Self Employed</option>
        </select>

        <label htmlFor="companyName">Company Name:</label>
        <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

        <label htmlFor="employmentDuration">Employment Duration:</label>
        <input type="text" id="employmentDuration" value={employmentDuration} onChange={(e) => setEmploymentDuration(e.target.value)} />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />

        <label htmlFor="state">State:</label>
        <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />

        <label htmlFor="pincode">Pincode:</label>
        <input type="text" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label htmlFor="aadharCard">Aadhar Card:</label>
        <input type="file" id="aadharCard" onChange={(e) => setAadharCard(e.target.files[0])} required accept=".pdf,.jpg,.png" />

        <label htmlFor="panCard">PAN Card:</label>
        <input type="file" id="panCard" onChange={(e) => setPanCard(e.target.files[0])} required accept=".pdf,.jpg,.png" />

        <label htmlFor="photo">Photo:</label>
        <input type="file" id="photo" onChange={(e) => setPhoto(e.target.files[0])} required accept=".jpg,.png" />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default LoanForm;

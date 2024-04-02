import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; // Import the Nav component

const Main = () => {
  // Sample service applications and user details
  const services = [
    { id: 1, name: 'Debit Card Application',  link: '/debitcardform' },
    { id: 2, name: 'Loan Application', link: '/LoanForm' },
    { id: 3, name: 'New Account Application', link: '/openaccount' },
    { id: 4, name: 'Credit Card Application', link: '/creditcardform' },
  ];
  const Tansactions = [
    { id: 1, name: 'Bank Transfer', link: '/banktransfer' },
    { id: 2, name: 'Check History',link: '/checkhistory' },
    { id: 3, name: 'Check Balance',link: '/checkbalance' },
    { id: 4, name: 'Mobile Recharge',link: '/mobilerecharge' },
    { id: 6, name: 'Pay Bills', link: '/paybills' },
  ];
  

  // Sample user details
  const userDetails = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', accountType: 'Savings' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', accountType: 'Checking' },
    { id: 3, name: 'Alice Brown', email: 'alicebrown@example.com', accountType: 'Savings' },
  ];

  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter user details based on the search query
  const filteredUsers = userDetails.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.accountType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-container">
      <center><h1>Our Services</h1></center>
      <b><h2>Applications</h2></b>
      <div className="services-container">
        {services.map(service => (
          <div key={service.id} className="service-container">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <Link to={service.link}><center>Apply Now</center></Link>
          </div>
        ))}
      </div>
      <div className="transactions-container">
        <b><h2>Transactions</h2></b>
        {Tansactions.map(transaction => (
          <div key={transaction.id} className="transaction-container">
            <h2>{transaction.name}</h2>
            <p>{transaction.description}</p>
            <Link to={transaction.link}><center>Open</center></Link>
          </div>
        ))}
      </div>
      <div className="user-details-container">
        <h1>Users</h1>
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {filteredUsers.map(user => (
          <div key={user.id} className="user-details">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Account Type: {user.accountType}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Main;
  
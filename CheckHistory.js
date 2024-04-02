import React from 'react';
import './CheckHistory.css'; // Import the CSS file for styling

const CheckHistory = () => {
  const checkHistoryData = [
    { userName: 'Alice', amount: 1000, date: '2024-03-31' },
    { userName: 'Bob', amount: 1500, date: '2024-03-30' },
    { userName: 'Charlie', amount: 2000, date: '2024-03-29' },
    { userName: 'Daisy', amount: 2500, date: '2024-03-28' },
    { userName: 'Emily', amount: 3000, date: '2024-03-27' },
    { userName: 'Felix', amount: 3500, date: '2024-03-26' },
    { userName: 'Grace', amount: 4000, date: '2024-03-25' },
    { userName: 'Harry', amount: 4500, date: '2024-03-24' },
    { userName: 'Isabel', amount: 5000, date: '2024-03-23' },
    { userName: 'Jack', amount: 5500, date: '2024-03-22' },
    { userName: 'Kelly', amount: 6000, date: '2024-03-21' },
    { userName: 'Liam', amount: 6500, date: '2024-03-20' },
    { userName: 'Megan', amount: 7000, date: '2024-03-19' },
    { userName: 'Noah', amount: 7500, date: '2024-03-18' },
    { userName: 'Olivia', amount: 8000, date: '2024-03-17' },
    { userName: 'Peter', amount: 8500, date: '2024-03-16' },
    { userName: 'Quinn', amount: 9000, date: '2024-03-15' },
    { userName: 'Rachel', amount: 9500, date: '2024-03-14' },
    { userName: 'Sam', amount: 10000, date: '2024-03-13' },
    { userName: 'Taylor', amount: 10500, date: '2024-03-12' },
  ];

  return (
    <div className="check-history-container">
      <h2>Check History</h2>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {checkHistoryData.map((data, index) => (
            <tr key={index}>
              <td>{data.userName}</td>
              <td>{data.amount}</td>
              <td>{data.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckHistory;

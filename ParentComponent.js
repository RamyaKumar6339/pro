import React from 'react';
import SignUp from './SignUp';

const ParentComponent = () => {
  const registerFunction = (userData) => {
    console.log('User registered:', userData);
    // Perform any additional actions after registration
    // Navigate to '/main'
    //navigate('/main'); // assuming you have access to navigate from 'react-router-dom'
  };

  const cancelFunction = () => {
    console.log('Registration canceled');
    // Perform any actions when registration is canceled
  };

  return (
    <div>
      <SignUp onRegister={registerFunction} onCancel={cancelFunction} />
    </div>
  );
};

export default ParentComponent;

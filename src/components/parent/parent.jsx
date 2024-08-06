import React, { useState } from 'react';
import SignUp from '../SignUp/SignUp'; 

const parent = () => {
  const [formData, setFormData] = useState({});

  const handleFormDataChange = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <SignUp onFormDataChange={handleFormDataChange} />
      {/* Render Display or other components as needed */}
    </div>
  );
};

export default parent;
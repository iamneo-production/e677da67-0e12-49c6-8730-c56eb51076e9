import React, { useState } from 'react';
import './lifeinsurance.css'; // Import the CSS file

const LifeInsuranceForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCoverageAmountChange = (e) => {
    setCoverageAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

  };

  

  return (
    <form className="insurance-form" onSubmit={handleSubmit}>
      <h2>Life Insurance Form</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <label>
        Gender:
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Coverage Amount:
        <input type="number" value={coverageAmount} onChange={handleCoverageAmountChange} />
      </label>
      <button type="submit">Get Quote</button>


      
    </form>    
  );
};

export default LifeInsuranceForm;

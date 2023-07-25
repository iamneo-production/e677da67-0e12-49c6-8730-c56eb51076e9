import React from 'react';
import './plans.css';

const ICICIInsurancePlans = () => {
  const plans = [
    {
      name: 'Health Protect Plus',
      information: 'Comprehensive health coverage with cashless treatment.',
      cost: 'Starting from ₹500/month',
    },
    {
      name: 'Home Secure',
      information: 'Protects your home and belongings against various risks.',
      cost: 'Starting from ₹1,000/month',
    },
    {
      name: 'Life Assure',
      information: 'Life insurance with financial security for your family.',
      cost: 'Starting from ₹500/month',
    },
  ];

  return (
    <div className="icici-insurance-plans">
    
      <h2>ICICI Insurance Plans</h2>
      {plans.map((plan, index) => (
        <div key={index} className="plan">
          <h3>{plan.name}</h3>
          <p>{plan.information}</p>
          <p>Cost: {plan.cost}</p>
        </div>
      ))}
    </div>
  );
};

export default ICICIInsurancePlans;

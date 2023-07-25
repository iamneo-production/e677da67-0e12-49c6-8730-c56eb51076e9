import React from 'react';
import './carinsurance.css';

const plans = [
  {
    title: ' Non-Linked Accidental Death and Disability Rider',
    description: 'Non-Linked Accidental Death and Disability Rider is designed to secure the financial needs of your loved ones in case of your unfortunate demise or a disability caused due to accidents. The Rider will be attached to your base policy and provide you additional sum assured to give you that extra comfort of safety.',
    KeyFeatures: ['Protection against accidental death1 and disabilities', 'Get cover of up to the sum assured3 of the base policy.', 'Flexible payment and rider coverage term combinations.'],
    ImportantInformation: ['Tax benefits4 may be applicable as per prevailing tax laws.']
  },
  {
    title: 'Unit Linked Accidental Death and Disability Rider',
    description: 'Life cover in addition to the base policys cover in the event of death due to accident',
    KeyFeatures: ['Life cover in addition to the base policys cover in the event of death due to accident', 'Sum Assured equal to base plan coverage','Available with ICICI Pru Signature, ICICI Pru Lifetime Classic and ICICI Pru Smart Life'],
    ImportantInformation: ['No Additional premium required*', 'Tax Benefits as per prevailing tax laws^']
  },
  {
    title: 'Corona Protect rider',
    description: 'Corona Protect Rider is designed to help you financially in case you get hospitalised due to COVID-19. Not only that, it protects you with an additional life cover.',
    KeyFeatures: ['COVID-19 Hospitalization Benefit: get 25% of the rider Sum Assured on hospitalization* for minimum 72 hours due to COVID-19', 'Life Insurance Cover: Covers death due to any reason','Corona Protect rider is available with ICICI Pru Guaranteed Income for Tomorrow'],
    ImportantInformation: ['Affordable one-time premium', 'Tax benefits^ as per prevailing tax laws']
  },
  // Add more plans as needed
];

const CarInsurancePlans = () => {
    const applied = () => {
        alert("Applied Successfully")
    }
  return (
    
    <div className="car-insurance-plans">
      <h2 className="section-title">Car Insurance Plans</h2>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-details">
              <div className="detail-group">
                <h4 className="detail-group-title">Coverage Options</h4>
                <ul className="detail-list">
                  {plan.KeyFeatures.map((option, idx) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-group">
                <h4 className="detail-group-title">Additional Benefits</h4>
                <ul className="detail-list">
                  {plan.ImportantInformation.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="plan-cta">
              <button onClick={applied} className="cta-button">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarInsurancePlans;

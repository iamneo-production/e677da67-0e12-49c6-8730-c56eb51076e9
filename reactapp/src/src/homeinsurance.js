import React from 'react';
import './homeinsurance.css';

const plans = [
  {
    title: ' Fire & Special Perils Covered',
    description: 'This insurance policy covers physical loss or damage, or destruction caused to insured property due to fire, explosion, storm, earthquake and other unforeseen events specified in the policy wordings.',
    KeyFeatures: ['Protection against accidental death1 and disabilities', 'Get cover of up to the sum assured3 of the base policy.', 'Flexible payment and rider coverage term combinations.'],
    ImportantInformation: ['Tax benefits4 may be applicable as per prevailing tax laws.']
  },
  {
    title: 'Burglary & Theft Cover',
    description: 'Coverage against loss and damage caused by burglary, theft, robbery of home contents and personal money. You can also opt for an add-on to cover personal belongings of domestic help and guests.',
    KeyFeatures: ['Life cover in addition to the base policys cover in the event of death due to accident', 'Sum Assured equal to base plan coverage','Available with ICICI Pru Signature, ICICI Pru Lifetime Classic and ICICI Pru Smart Life'],
    ImportantInformation: ['No Additional premium required*', 'Tax Benefits as per prevailing tax laws^']
  },
  {
    title: 'Key Replacement Cover',
    description: 'This policy reimburses the cost of obtaining keys form a locksmith if you are locked out of your home due to the loss or theft of your keys. It also reimburses the cost of replacing your locks and keys if your home is broken into.',
    KeyFeatures: ['COVID-19 Hospitalization Benefit: get 25% of the rider Sum Assured on hospitalization* for minimum 72 hours due to COVID-19', 'Life Insurance Cover: Covers death due to any reason','Corona Protect rider is available with ICICI Pru Guaranteed Income for Tomorrow'],
    ImportantInformation: ['Affordable one-time premium', 'Tax benefits^ as per prevailing tax laws']
  },
  {
    title: 'Loss of Rent/ Alternative Accommodation',
    description: 'We pay the amount of rent you lose or alternative rent you pay while your home building is not fit for living because of any physical loss/damage arising out of an insured event.',
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
      <h2 className="section-title">Home Insurance Plans</h2>
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

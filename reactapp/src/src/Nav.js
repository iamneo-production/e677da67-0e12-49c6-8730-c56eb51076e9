import React from 'react'
import { Link,Navigate } from 'react-router-dom'
import "./Nav.css"
import footer from './footer'
import img from "./car_icon.png"
import img1 from "./home_icon.png"
import img2 from "./life_icon.png"
import NavBar from './NavBar'
import Footer from './footer'

  function Navie() {
      return (
        <div className="homepage">
        <NavBar/>
        <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">Protecting What Matters Most</h1>
          <p className="hero-subtitle">Get the insurance coverage you need today!</p>
        </section>

        <section className="services-section">
          <h2 className="section-title">Our Services</h2>
          <div className="service-card">
            <img src={img} alt="Car Insurance" />
            <h3 className="service-title">Car Insurance</h3>
            <p className="service-description">Car insurance refers to an insurance policy that covers various car-related risks.And if your car faces damages or you cause d, your insurer will offer financial assistance, as per the applicable terms and conditions.</p>
          </div>
          <div className="service-card">
            <img src={img1} alt="Home Insurance" />
            <h3 className="service-title">Home Insurance</h3>
            <p className="service-description">Home insurance also known as property insurance or homeowner insurance covers the structure as well as the content of the home from unexpected loss or damage caused due to theft, natural calamity, fire accident, etc.
            </p>
          </div>
          <div className="service-card">
            <img src={img2} alt="Life Insurance" />
            <h3 className="service-title">Life Insurance</h3>
            <p className="service-description">Life insurance a contract signed between a person and an insurance company.The company promises to pay a lump sum known as a death benefit to the beneficiaries of the policyholder after the death of the policyholder. </p>
            </div>
            </section>
            </main>
        
      <Footer/>
            </div>
        
      )
    }
    
    export default Navie
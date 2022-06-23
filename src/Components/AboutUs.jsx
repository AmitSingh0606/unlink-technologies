import React, { useEffect, useState } from 'react';
import AboutImg from "../Images/2713670bg1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
  useEffect(() => {
      AOS.init({ duration: 2000 })
  });
  const [Order, setOrder] = useState(false);
  const ScreenWidth = () => {
    if (window.innerWidth <= 767) {
      setOrder(true);
    } else {
      setOrder(false);
    }
  }
  window.addEventListener('resize', ScreenWidth);
  return (
    <div id='aboutus' className='AboutUs-container container'>
      <div className="row">
        <div className={Order ? "col-lg-6 col-md-12 order-2" : "col-md-12 col-lg-6 order-1"}>
          <div className="aboutus-img-div">
            <img src={AboutImg} alt="AboutUsImg" className="AboutUsImg img-fluid" />
          </div>
        </div>
        <div className={Order ? "col-md-12 col-lg-6 order-1 bubble-column" : "col-md-12 col-lg-6 order-2 bubble-column"}>
        <div className="header-image1"></div>
      <div className="header-image2"></div>
          <span className="section-heading">
            -About Us-
          </span>
          <h2 data-aos="fade-up" className="section-sub-heading">
            Helping Business build <span className='TextColors'> innovative </span> software solutions with speed and scale.
          </h2>
          <p data-aos="fade-up" className="section-content">
            Since our inception, we have invested in organic growth; building on our engineering capabilities, organizational processes, and culture required to deliver a truly collaborative ecosystem for solving technology challenges. At the core of Unlink lies a culture rooted in innovation, learning and a result-oriented mindset.
          </p>
          <h2 data-aos="fade-up" className="section-sub-heading">
            Company Value
          </h2>
          <p data-aos="fade-up" className="section-content">
            We uphold the highest standards of integrity in all of our actions.We work together, across boundaries, to meet the needs of our customers and to help our Company win.          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
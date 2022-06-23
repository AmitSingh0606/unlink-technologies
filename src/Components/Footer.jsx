import React from 'react';
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope, BsGlobe2 } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
    return (
        <div className='footer container-fluid'>
            <div className="section-heading text-center text-light">
                -Contact Us-
            </div>
            <div className="container">
                <div className="newsletter text-center">
                    <input type="email" className="newsletter-input" placeholder='@example.com' />
                </div>
                <div className="footer-btn-div">
                    <button className="btn start-btn footer-btn"> Submit </button>
                </div>
                <div className="row footer-content">
                    <div className="col-md-4">
                        <p className="footer-section">
                            Our collaboration with leading technology companies ensure that you get the best foundation for your software project.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <a href='http://maps.google.com/?q=nationalcapitalregion' className="contact-method">
                            <span>
                                <GrLocation  size="20px" />
                            </span>
                            <span className="about-contact">
                                National Capital Region, India
                            </span>
                        </a>
                        <div onClick={()=> window.open('tel:+91 96505 83832')} className="contact-method">
                            <span>
                                <FiPhoneCall color='black' size="16px" />
                            </span>
                            <span className="about-contact">
                                +91 96505 83832
                            </span>
                        </div>
                        <div className="contact-method" onClick={() => window.location = 'mailto:info@unlink-technologies.com'}>
                            <span>
                                <BsEnvelope color='black' size="16px" />
                            </span>
                            <span className="about-contact">
                                info@unlink-technologies.com
                            </span>
                        </div>
                        <a href='https://www.unlink-technologies.com/' className="contact-method">
                            <span>
                                <BsGlobe2 color='black' size="16px" />
                            </span>
                            <span className="about-contact">
                                www.unlink-technologies.com
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href='http://localhost:3000' className="quick-links">
                            About Us
                        </a>
                        <a href='http://localhost:3000' className="quick-links">
                            Services
                        </a>
                        <a href='http://localhost:3000' className="quick-links">
                            Portfolio
                        </a>
                        <a href='http://localhost:3000' className="quick-links">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
            <div className="social-links-div">
                <div className="Follow-Us">
                    Follow Us
                </div>
                <a href='http://localhost:3000' className="Follow-Us texr-light">
                    <span>
                        <CgFacebook size="20px" />
                    </span>
                    <span className="about-contact">
                        Unlink Technologies
                    </span>
                </a>
                <a href='http://localhost:3000' className="Follow-Us texr-light">
                    <span>
                        <FaTwitter size="20px" />
                    </span>
                    <span className="about-contact">
                        @unlink-tech
                    </span>
                </a>
                <a href='http://localhost:3000' className="Follow-Us texr-light">
                    <span>
                        <RiInstagramFill size="20px" />
                    </span>
                    <span className="about-contact">
                        @unlink-tech
                    </span>
                </a>
            </div>
            <div className="copyright text-center">
                Copyright © 2022. All Rights Reserved.
            </div>
        </div>
    )
}
export default Footer;
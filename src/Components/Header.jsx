import React from 'react';
import mobMockup from "../Images/6228381bg.png";
import dots from "../Images/dotPattern.png"
import { Link } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";
const Header = () => {
    return (
        <>
            <div id='home' className="container-fluid header-fluid">
                <div className="container mx-auto header-container">
                    <div className="row">
                        <div className="col-md-6 left-header">
                            <div className="left-header-child">
                                <h1 className="header-heading">
                                    Your Technology Partner...
                                </h1>
                                <p className="header-paragraph">
                                    We assist companies in elevating their notion of what’s possible when our limitless technology expertise is interfaced with an inquisitive understanding of their business goals. Let’s talk about how we can create something awesome together.
                                </p>
                                <a className="start-btn btn" type='button' href='http://localhost:3000'> Let's Start </a>
                            </div>
                        </div>
                        <div className="col-md-6 right-header">
                            <div className="right-header-images-div">
                                <img src={dots} alt="dots" className="dots img-fluid" />
                                <img src={mobMockup} alt="mobile-mockup" className="header-right-img img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="scroll-link" to="home"> <span className="scroll-top"> <IoIosArrowUp className="scroll-up-icon" size="40px" /> </span></Link>
        </>)
}

export default Header;
import React from 'react';
import blogImg from "../src/Images/4950546.jpg";
import blogImg1 from "../src/Images/blog1.jpg";
import blog1 from "../src/Images/blog.jpg";
import blog3 from "../src/Images/pexel.jpg";
import { CgArrowLongRight } from "react-icons/cg";
import Animations from './Components/Animations';
const Blogs = () => {
    return (
        <>
            <div id='blog' className="blogs-fluid container-fluid">
                <div className='container blogs'>
                    <div className="row">
                        <div className="col-12 blog-header">
                            <h1 className="blog-heading text-center">
                                We Create Best Blogging Sites
                            </h1>
                            <Animations />
                            <div className="btn-div">
                                <button className="start-btn btn btn-light"> Subscribe </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-fluid2">
                <div className="container blog-container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="section-sub-heading">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sunt!
                                    </h2>
                                    <p className='blog-content'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum explicabo quae qui dolore animi eum! Cum eaque commodi earum et aspernatur quos, ullam natus quod iusto explicabo alias eveniet ab repellat perspiciatis voluptatum
                                    </p>
                                    <CgArrowLongRight className='reactArrow' />
                                </div>
                                <div className="col-md-6">
                                    <div className="main-blog-img">
                                        <img src={blogImg} alt="blog" className="img-fluid blogImg" />
                                    </div>
                                </div>
                            </div>
                            <div className="blog-rows row">
                                <div className="col-md-6 blog-colums">
                                    <img src={blog3} alt="other-blogs" className="other-blogs img-fluid" />
                                    <div className="blog-column-content">
                                    <div className="blog-time">06 june, 2021</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus suscipit similique mollitia
                                    </div>
                                </div>
                                <div className="col-md-6 blog-colums">
                                    <img src={blog1} alt="other-blogs" className="other-blogs img-fluid" />
                                    <div className="blog-column-content">
                                    <div className="blog-time">12 jan, 2022</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus suscipit similique mollitia
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 blog-links-col">
                            <input type="email" className="blog-newsletter" placeholder='Enter your email' />
                            <button className="start-btn btn"> Subscribe </button>
                            <div className="blog-categary-main">
                            <h2 className="blog-categary-heading">
                                Categories
                            </h2>
                            <p className="categary-type"> Culture </p>
                            <p className="categary-type"> Creativity </p>
                            <p className="categary-type"> Food </p>
                            <p className="categary-type"> Travel </p>
                            <p className="categary-type"> Music </p>
                            </div>
                            <h2 className="section-sub-heading">
                                Popular Posts
                            </h2>
                            <div className="recent-blogs">
                                <img src={blogImg1} alt="blog" className="img-fluid blogImg" />
                            </div>
                            <div className="section-sub-heading">
                                Recent Links
                            </div>
                            <ul className="blog-ul">
                                <li>
                                    <a className=" blog-recent-links" href='http://localhost:3000/blog'>
                                        Lorem ipsum dolor sit amet.
                                    </a>
                                </li>
                                <li>
                                    <a className=" blog-recent-links" href='http://localhost:3000/blog'>
                                        Lorem ipsum dolor sit amet.
                                    </a>
                                </li>
                                <li>
                                    <a className=" blog-recent-links" href='http://localhost:3000/blog'>
                                        Lorem ipsum dolor sit amet.
                                    </a>
                                </li>
                                <li>
                                    <a className=" blog-recent-links" href='http://localhost:3000/blog'>
                                        Lorem ipsum dolor sit amet.
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs
import React, { useState  } from 'react';
import  { useLocation , useHistory  } from 'react-router-dom';
import unlinklogo from '../src/Images/unlinklogo.png';
import { scroller } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
const Navbar = () => {
    const [navs, setNavs] = useState(false);
    const [show, setShow] = useState(false);


    const ChangeBackground = () => {
        if (window.scrollY >= 20) {
            setNavs(true);
        } else {
            setNavs(false);
        }
    }


    window.addEventListener('scroll', ChangeBackground);
    const OpenModal = () => {
        setShow(true);
    }


    const CloseModal = () => {
        setShow(false);
    }


    const path = useLocation().pathname;
    const location = path.split('/')[1];
    const history = useHistory();
    
    const AboutUsScroller = async ()=>{
    await history.push('/#aboutus');
    await scroller.scrollTo('aboutus' ,{
        duration : 1500,
        smooth : true,
        offset : 50
    })
    }


    const ServiceScroller = async ()=>{
        await history.push('/#services');
        await scroller.scrollTo('services' ,{
            duration : 1500,
            smooth : true,
            offset : 50
        })
        }


        const PortfolioScroller = async ()=>{
            await history.push('/#portfolio');
            await scroller.scrollTo('portfolio' ,{
                duration : 1500,   
                smooth : true,
                offset : 50
            })
            }
            

        const FindBlogPath = async (e)=>{
            const Location = await e.view.location
            const path = Location.pathname;
            const pathID = path.split("/")[1]
            console.log(pathID , "blog...");
         await scroller.scrollTo(pathID ,{
             duration : 500,
             smooth : true,
         })
     
        }



    return <div>
        <nav className={navs ? " navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-light Navs"}>
            <div className="container">
                <NavLink className="navbar-brand" exact to="/"><img src={unlinklogo} alt="brand-logo" className="brand-logo img-fluid" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/"> Home </NavLink>
                        </li>
                        <li className="nav-item">
                            { location === "" ? (
                            <a activeclassname='active' duration={2000} className="nav-link" style={{scrollBehavior : "smooth"}} aria-current="page"  href="#aboutus"> AboutUs </a>
                            ) : (
                                <button onClick={AboutUsScroller} className="nav-link nav-btn" > AboutUs </button>
                                ) }
                        </li>
                        <li className="nav-item">
                            { location === "" ? (
                            <a activeclassname='active' duration={2000} className="nav-link" style={{scrollBehavior : "smooth"}} aria-current="page"  href="#services"> Services </a>
                            ) : (
                                <button onClick={ServiceScroller} className="nav-link nav-btn" > Services </button>
                                ) }
                        </li>
                        <li className="nav-item">
                            { location === "" ? (
                            <a activeclassname='active' duration={2000} className="nav-link" style={{scrollBehavior : "smooth"}} aria-current="page"  href="#portfolio"> Portfolio </a>
                            ) : (
                                <button onClick={PortfolioScroller} className="nav-link nav-btn" > Portfolio </button>
                                ) }
                        </li>
                        <li className="nav-item nav-item-button">
                            <Button onClick={OpenModal} activeclassname='activate' className="nav-link item-links btn-light nav-btn"  to="contactus"> ContactUs </Button>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={FindBlogPath} className="nav-link" exact to="/blog">Blogs</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Modal show={show}>
            <Modal.Header> Contact Me   <Button className='model-btn btn-light' onClick={CloseModal}> X </Button>
 </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label"> Full Name </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name " />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label"> Phone No. </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone No." />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"> Messages </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-primary model-btn"> Submit </button>
            </Modal.Body>
        </Modal>
    </div>;
};
export default Navbar;

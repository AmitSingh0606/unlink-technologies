import React from 'react'
import cloudImgs from "../Images/20945391.jpg"
const ItService = () => {
    return (
        <div>
            <div id='IT&Consult' className="container cloud-container">
                <div className="row">
                    <div className="col-md-6 cloud-left-col">
                        <div className="cloud-left-col-child">
                            <h1 className="header-heading">
                                IT Consultancy Service
                            </h1>
                            <p className="section-content">
                            We provide IT consultancy services to organisations looking to implement or foster their IT requirements and create milestones among the challenges of IT-driven demand and supply.                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={cloudImgs} alt="cloud-img" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItService;
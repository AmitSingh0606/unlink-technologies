import React from 'react'
import cloudImgs from "../Images/20945287.jpg"
const Cloud = () => {
    return (
        <div>
            <div id='cloudservice' className="container cloud-container">
                <div className="row">
                    <div className="col-md-6 cloud-left-col">
                        <div className="cloud-left-col-child">
                            <h1 className="header-heading">
                                Cloud Service
                            </h1>
                            <p className="section-content">
                                Have you discovered that the economics of cloud are unique, requiring skilled scrutiny of the types and frequency of utilization and related costs? While the cloud shifts many expenses from CAPEX to OPEX, there is always a component of each that must be carefully managed.

                                 provides expertise in building and managing cloud-friendly and hybrid cloud management solutions and services. We will create a secure, integrated platform to orchestrate your applications across multiple zones, using our tools, third-party tools and rigorous budget management to optimize resources and reduce costs.                    </p>
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

export default Cloud
import React from 'react'
import cloudImgs from "../Images/20944391.jpg"
const SoftwareService = () => {
    return (
        <div>
            <div id='softwareEngg' className="container cloud-container">
                <div className="row">
                    <div className="col-md-6 cloud-left-col">
                        <div className="cloud-left-col-child">
                            <h1 className="header-heading">
                            SOFTWARE DEVELOPMENT AND SUPPORT SERVICES
                            </h1>
                            <p className="section-content">
                            Unlink offers software development and specification with industry standardized tools as well as cross-platform software support services to maintain and extend the client's new requirements in ever changing scenarios.                            </p>
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

export default SoftwareService
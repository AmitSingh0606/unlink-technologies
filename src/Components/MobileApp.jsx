import React from 'react'
import cloudImgs from "../Images/20945431.jpg"
const MobileApp = () => {
    return (
        <div>
            <div id='moblile&application' className="container cloud-container">
                <div className="row">
                    <div className="col-md-6 cloud-left-col">
                        <div className="cloud-left-col-child">
                            <h1 className="header-heading">
                                Mobile Application Service
                            </h1>
                            <p className="section-content">
                                Unlink offers robust and scalable mobile application development services for better user experience across various platforms(android and ios). We impart complete solutions for demanding mobile applications for superior performance.
                            </p>
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

export default MobileApp
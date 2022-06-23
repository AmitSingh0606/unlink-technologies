import React from 'react'
import cloudImgs from "../Images/18907bg.png"
const WebDevlopment = () => {
    return (
        <div>
            <div id='WebDevlopment' className="container cloud-container">
                <div className="row">
                    <div className="col-md-6 cloud-left-col">
                        <div className="cloud-left-col-child">
                            <h1 className="header-heading">
                                Web Development Service
                            </h1>
                            <p className="section-content">
                                Unlink offers optimized, modular, secured and scalable web application development and support services across various platforms and industry verticals for high throughput and rich user experiences. Our web applications meet spikes in higher user expectations and demands than ever before.                            </p>
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

export default WebDevlopment
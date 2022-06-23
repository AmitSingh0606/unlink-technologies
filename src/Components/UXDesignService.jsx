import React from 'react'
import cloudImgs from "../Images/4115337.jpg"
const UXDesignService = () => {
    return (
        <div>
            <div id='ux&ui' className="container cloud-container">
                <div className="row">
                    <div className="col-md-6 cloud-left-col">
                        <div className="cloud-left-col-child">
                            <h1 className="header-heading">
                                UX/UI Development
                            </h1>
                            <p className="section-content">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate enim fugit, iusto itaque earum beatae cupiditate quia distinctio at magnam, adipisci blanditiis non incidunt? Voluptate earum nam deleniti asperiores suscipit!
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

export default UXDesignService
import React from 'react';
import SimpleSlider from './SimpleSlider';
const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio-container container-fluid'>
        <div className="container">
        <div className="section-heading text-center">
                    -Our Portfolio-
                </div>
                <div className="service-sub-heading text-center">
                    Get Recent Projects Here
                </div>
                <SimpleSlider/>
        </div>
    </div>
  )
}

export default Portfolio;
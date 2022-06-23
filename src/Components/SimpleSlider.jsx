import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import port1 from "../Images/537.jpg";
import port2 from "../Images/4428861.jpg";
import port3 from "../Images/5031659.jpg";
export default function SimpleSlider() {
    const PortfolioSlider = [
        { id : 1,
          sliderImg : port1,
          slideHeading : "Responsive Website",
          slideContent : "Lorem ipsum dolor sit amet.",
          portfolioLink : "http://localhost:3000/"
        },
        { id : 2,
          sliderImg : port2,
            slideHeading : "Responsive Website",
            slideContent : "Lorem ipsum dolor sit amet.",
            portfolioLink : "http://localhost:3000/"
          },
        { id : 3,
          sliderImg : port3,
            slideHeading : "Responsive Website",
            slideContent : "Lorem ipsum dolor sit amet.",
            portfolioLink : "http://localhost:3000/"
          },
        { id : 4,
            sliderImg : port2,
              slideHeading : "Responsive Website",
              slideContent : "Lorem ipsum dolor sit amet.",
              portfolioLink : "http://localhost:3000/"
        }      
    ]
    var Settings = {
        dots: true,
        infinite: true,
        swipeToSlide: true,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <Slider{...Settings}>
        {PortfolioSlider.map((e)=>{
            return (
                <a key={e.id} href= {e.portfolioLink}>
                <div  className="slider-imgs">
                <div className="portfolio-background"> <img src={e.sliderImg} className="banners img-fluid" alt="HomeBanner4" /> </div>
                <div className="about-slide">
                    <h4 className=" slide-heading text-dark text-center">{e.slideHeading}</h4>
                    <h6 className="slide-content text-dark text-center">
                        {e.slideContent}
                    </h6>
                </div>
            </div>
            </a>
            );
        })}
        </Slider>
    );
}
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Services = () => {



    useEffect(() => {
        AOS.init({ duration: 2000 })
    });

    const FindPath = async (e) => {
        const Location = await e.view.location
       const path = Location.pathname;
       const pathID = path.split("/")[1]
    await scroller.scrollTo(pathID ,{
        duration : 500,
        smooth : true,
    })

    }


    const ServiceData = [
        {
            id: 1,
            RouteLink: "/cloudservice",
            serviceID: "#cloudservice",
            Hastag: "1.",
            serviceHeading: "Managed Cloud Services",
            serviceSectionContent: "Develop Scalable and resilient software product that maximise cloud efficiency and reduce your IT infrastructure cost"
        },
        {
            id: 2,
            RouteLink: "/IT&Consult",
            serviceID: "#IT&Consult",
            Hastag: "2.",
            serviceHeading: "IT Consulting",
            serviceSectionContent: "Keep your software in line with latest technology, feature and performance standards."
        },
        {
            id: 3,
            RouteLink: "/softwareEngg",
            serviceID: "#softwareEngg",
            Hastag: "3.",
            serviceHeading: "Software Engineering Services",
            serviceSectionContent: "Helping organizations to design, engineer, and deliver innovative software solutions with speed and scale"
        },
        {
            id: 4,
            RouteLink: "/WebDevlopment",
            serviceID: "#WebDevlopment",
            Hastag: "4.",
            serviceHeading: "Web Devlopment Service",
            serviceSectionContent: "Unlink offers optimized, modular, secured and scalable web application development "
        },
        {
            id: 5,
            RouteLink: "/ux&ui",
            serviceID: "#ux&ui",
            Hastag: "5.",
            serviceHeading: "UX/UI Design",
            serviceSectionContent: "Being a well-known UI/UX design agency, Unlink is recognized for serving modern business needs."
        },
        {
            id: 6,
            RouteLink: "/moblile&application",
            serviceID: "#moblile&application",
            Hastag: "6.",
            serviceHeading: "Mobile Application",
            serviceSectionContent: "Unlink offers robust and scalable mobile application development services for better user experience"
        }
    ]


    return (
        <div id='services' className="section-background">
            <div className="curved-shape"></div>
            <div className='container-fluid service-container-fluid'>
                <div className="section-heading text-center">
                    -Our Services-
                </div>
                <div className="service-sub-heading text-center">
                    Best Services For Your Business
                </div>
                <div className="main-service-container container-fluid">
                    <div className="container aux-service-container">
                        <div className="row">
                            {ServiceData.map((e) => {
                                return (
                                    <div key={e.id} className="col-md-6 col-lg-6 col-xl-4 my-3">
                                        <div className="service-column p-3">
                                                <NavLink exact to={e.RouteLink} onClick = {FindPath}>
                                                    <div className="hastag">{e.Hastag}</div>
                                                    <div className="Service-heading">{e.serviceHeading}</div>
                                                    <div className="service-section-content">{e.serviceSectionContent}</div>
                                                </NavLink>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
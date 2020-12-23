/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import "../assets/css/services.css";
import { Link } from "react-router-dom";


function Services(){
    return (
        <div className="services-container">
        <div className="inner-width">
          <h1 className="services-title">Our Services</h1>
          <div className="services-border" />
          <div className="services-content">
            <a href={`/consignment`} className="services-content--box">
              <div className="services-content__icon">
                <i className="fas fa-shopping-basket"></i>
              </div>
              <div className="services-content__title">
                Shoes consignment
              </div>
              <div className="services-content__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in consequat justo. Aenean non suscipit eros, vitae hendrerit quam. Nulla facilisi. Nulla placerat ultricies lectus, vel interdum lacus elementum eu. 
              </div>
            </a>
            <a className="services-content--box" href="/clean">
              <div className="services-content__icon">
                <i className="fas fa-hand-sparkles"></i>
              </div>
              <div className="services-content__title">
                Shoes cleaning
              </div>
              <div className="services-content__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in consequat justo. Aenean non suscipit eros, vitae hendrerit quam. Nulla facilisi. Nulla placerat ultricies lectus, vel interdum lacus elementum eu. 
              </div>
            </a>
            <a className="services-content--box" href="/custom">
              <div className="services-content__icon">
                <i className="fas fa-paint-brush" />
              </div>
              <div className="services-content__title">
                Custom
              </div>
              <div className="services-content__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in consequat justo. Aenean non suscipit eros, vitae hendrerit quam. Nulla facilisi. Nulla placerat ultricies lectus, vel interdum lacus elementum eu. 
              </div>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Services;
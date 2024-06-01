import React from 'react'
import './MainBanner.scss'

import { NavLink } from "react-router-dom";

export const MainBanner = () => {
  return (
    <div id="mainBanner">
      <div className="container">
        <div className="row d-flex flex-column align-items-center flex-md-row">
          <div className="col d-none d-lg-block">
            {/* <img className="img-fluid" src="https://images.unsplash.com/photo-1539795845756-4fadad2905ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="banner" /> */}
            <img className="img" src="oFF_a_logo_for_an_daycare_brand_simple_pixel_art_7a5a9cc9-22c2-4a63-962b-fa989bb5a89d-removebg-preview.png" alt="banner" />
          </div>
          <div className="col banner-text">
            <h1 className="mb-3">
              TipTools
            </h1>
            <p className="mt-5 mb-3 fs-24">
              Welcome to our family home daycare, a reliable and professional place where your child will learn and have fun.
              We understand the importance of finding a safe and nurturing environment for your child, and that's why we offer top-quality care from an experienced and loving educator.
              Our childcare is designed to provide a stimulating and educational atmosphere for your child's development and growth. So, if you're looking for a place that you can trust, look no further than Tiptools!</p>
            <div style={{ marginLeft: "-4px" }} className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-end mt-5">
              <div id="banner-actions" className="btn scale-1 mb-2 m-sm-1 btn-lg">
                <NavLink style={{ textDecoration: 'none' }} className="nav-item nav-link text-white" to="/about">
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  )
}

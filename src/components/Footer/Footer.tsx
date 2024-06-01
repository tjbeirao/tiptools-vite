import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { IconWrapper } from "../Icons/IconWrapper";

export const Footer = () => {
  return (
    <footer className="page-footer container pt-5 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <h3 className="footer-site-logo mb-4">
              TipTools Childcare
            </h3>
            <ul className="list-unstyled nav-links mb-5">
              <li>
                <NavLink style={{ textDecoration: 'none' }} className="nav-item nav-link" to="/about">
                  About us
                </NavLink>
              </li>
              {/* <li>
                <NavLink style={{ textDecoration: 'none' }} className="nav-item nav-link" to="/program">
                  Our Program
                </NavLink>
              </li>
              <li>
                <NavLink style={{ textDecoration: 'none' }} className="nav-item nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li> */}
            </ul>
            <div className="container social mb-4">
              <h3>Stay in touch</h3>
              <div className="row justify-content-center">
                <div className="col col-auto">
                  <a href="https://www.instagram.com/tiptoolschildcare/" target="_blank" rel="noreferrer">
                    <IconWrapper className="in" icon="instagram" size={24} />
                  </a>
                </div>
                <div className="col col-auto">
                  <a href="https://www.facebook.com/tiptoolschildcare/" target="_blank" rel="noreferrer">
                    <IconWrapper className="fb" icon="facebook-official" size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="copyright">
              <p className="mb-0">
                <small>© TipTools 2023. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

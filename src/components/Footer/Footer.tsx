import React from "react";
import { Row, Col, Typography, Layout } from 'antd';
import { NavLink } from "react-router-dom";
import { IconWrapper } from "../Icons/IconWrapper";
import "./Footer.scss";

const { Title, Text } = Typography;
const { Footer: AntFooter } = Layout;

export const Footer = () => {
  return (
    <AntFooter className="page-footer">
      <div className="container">
        <Row justify="center" className="pt-5 mt-5">
          <Col md={9} className="text-center">
            <Title level={3} className="footer-site-logo mb-4">
              TipTools Childcare
            </Title>
            <ul className="list-unstyled nav-links mb-5">
              <li>
                <NavLink to="/about" style={{ textDecoration: 'none' }}>
                  About us
                </NavLink>
              </li>
              {/* Uncomment the following links as needed
              <li>
                <NavLink to="/program" style={{ textDecoration: 'none' }}>
                  Our Program
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={{ textDecoration: 'none' }}>
                  Contact us
                </NavLink>
              </li>
              */}
            </ul>
            <Row justify="center" className="social mb-4">
              <Col>
                <a href="https://www.instagram.com/tiptoolschildcare/" target="_blank" rel="noreferrer">
                  <IconWrapper icon="instagram" size={24} />
                </a>
              </Col>
              <Col>
                <a href="https://www.facebook.com/tiptoolschildcare/" target="_blank" rel="noreferrer">
                  <IconWrapper icon="facebook-official" size={24} />
                </a>
              </Col>
            </Row>
            <Text className="copyright">
              © TipTools 2023. All Rights Reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

import React from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedKeys = [location.pathname.substring(1)];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Menu mode="horizontal" selectedKeys={selectedKeys} className="custom-nav">
      <Menu.Item key="logo" onClick={() => handleNavigation('/home')}>
        <img className="logo" src="logo/logo_horizontal_transparent.png" alt="logo" />
      </Menu.Item>
      <Menu.Item key="home" onClick={() => handleNavigation('/home')}>
        Home
      </Menu.Item>
      <Menu.Item key="about" onClick={() => handleNavigation('/about')}>
        About us
      </Menu.Item>
    </Menu>
  );
};

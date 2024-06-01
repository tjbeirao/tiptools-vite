import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './NavBar.scss';

const { Header } = Layout;

export const NavBar = () => {
  return (
    <Header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 50px' }}>
      <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img className="logo" src="logo/logo_horizontal_transparent.png" alt="logo" style={{ height: '64px' }} />
      </NavLink>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">
          <NavLink to="/about" style={{ textDecoration: 'none' }}>About us</NavLink>
        </Menu.Item>
        {/* Uncomment the following lines as needed
        <Menu.Item key="2">
          <NavLink to="/program" style={{ textDecoration: 'none' }}>Our Program</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/blog" style={{ textDecoration: 'none' }}>Blog</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/contact" style={{ textDecoration: 'none' }}>Contact us</NavLink>
        </Menu.Item>
        */}
      </Menu>
    </Header>
  );
};

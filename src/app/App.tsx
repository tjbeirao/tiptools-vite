import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Layout, Space } from 'antd';

import { AboutContainer } from '../components/About/AboutContainer';
import { ContactContainer } from '../components/Contact/ContactContainer';
import { Footer } from '../components/Footer/Footer';
import { HomePageContainer } from '../components/HomePage/HomePageContainer';
import { NavBar } from '../components/NarBar/NarBar';
import { ProgramContainer } from '../components/Program/ProgramContainer';
import { BlogContainer } from '../components/Blog/BlogContainer';
import { BlogPost } from '../components/Blog/BlogPost';

import './App.scss';

const { Header, Content, Footer: AntFooter } = Layout;

const App = () => {
  return (
    <Layout className="App">
      <Header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fffaf2' }}>
        <NavBar />
      </Header>
      <Content style={{ marginTop: '20px', padding: '0 50px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Routes>
            <Route path="home" element={<HomePageContainer />} />
            <Route path="about" element={<AboutContainer />} />
            <Route path="program" element={<ProgramContainer />} />
            <Route path="contact" element={<ContactContainer />} />
            <Route path="blog" element={<BlogContainer />} />
            <Route path="blog/:id" element={<BlogPost />} />
          </Routes>
        </Space>
      </Content>
      <AntFooter style={{ textAlign: 'center' }}>
        <Footer />
      </AntFooter>
    </Layout>
  );
}

export { App };

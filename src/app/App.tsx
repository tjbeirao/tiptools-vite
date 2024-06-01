import React from 'react';
import { Route, Routes } from "react-router-dom";

import { AboutContainer } from '../components/About/AboutContainer';
import { ContactContainer } from '../components/Contact/ContactContainer';
import { Footer } from '../components/Footer/Footer';
import { HomePageContainer } from '../components/HomePage/HomePageContainer';
import { NavBar } from '../components/NarBar/NarBar';
import { ProgramContainer } from '../components/Program/ProgramContainer';
import { BlogContainer } from '../components/Blog/BlogContainer';
import { BlogPost } from '../components/Blog/BlogPost';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-body mt-5">
        <Routes>
          <Route path="/" element={<HomePageContainer />}/>
          <Route path="about" element={<AboutContainer />}/>
          <Route path="program" element={<ProgramContainer />}/>
          <Route path="contact" element={<ContactContainer />}/>
          <Route path="blog" element={<BlogContainer />}/>
          <Route path="blog/:id" element={<BlogPost />}/>
        </Routes>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

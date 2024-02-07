import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/header';
import Sidebar from './components/sidebar';
import FlexBox from './components/flexbox';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume/intex';
import WhatDo from './pages/what-do';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <FlexBox style={{ alignItems: 'flex-start' }}>
        {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/what-do" element={<WhatDo />} />
          </Routes>

      </FlexBox>
      <Footer/>
    </div>
  );
}

export default App;

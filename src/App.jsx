import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderDefault from './components/HeaderDefault';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from "./pages/Home/HomePage"
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import LetsDoWorkTogether from './pages/Home/LetsDoWorkTogether';
import "./app.css"




function App() {
  const isHomePage = location.pathname === "/";

  return (
    <>
    <Router>
      {isHomePage ? <Header /> : <HeaderDefault />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      <LetsDoWorkTogether/>
      <Footer/>
    </Router>
    </>
  )
}

export default App

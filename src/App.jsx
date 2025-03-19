import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HeaderDefault from "./components/HeaderDefault";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import LetsDoWorkTogether from "./pages/Home/LetsDoWorkTogether";
import Privacypolicy from "./pages/Home/privacypolicy";
import Disclaimer from "./pages/Home/Disclaimer";
import TermCondition from "./pages/Home/TermCondition";
import ContactUs from "./pages/ContactUs/ContactUs";
import "./app.css";

function App() {
  const location = useLocation(); // Get current location from the router

  return (
    <>
      {/* Conditionally render Header or HeaderDefault based on the current path */}
      {location.pathname === "/" ? <Header /> : <HeaderDefault />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/TermCondition" element={<TermCondition />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>

      <LetsDoWorkTogether />
      <Footer />
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;

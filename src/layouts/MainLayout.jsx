import React from "react";
import HeaderDefault from "../components/HeaderDefault";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LetsDoWorkTogether from "../pages/Home/LetsDoWorkTogether";
import { useLocation } from "react-router-dom";
import "./MainLayout.scss"; 

const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <Header /> : <HeaderDefault />}
      <div className="app-container">
        <main>{children}</main>
        <LetsDoWorkTogether />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

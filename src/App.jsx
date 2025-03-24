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
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? <Header /> : <HeaderDefault />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/Term-Condition" element={<TermCondition />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
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

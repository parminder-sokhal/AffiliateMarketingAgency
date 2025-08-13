import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/AboutUs/AboutPage";
import Services from "./pages/Services/Services";
import Privacypolicy from "./pages/Home/privacypolicy";
import Disclaimer from "./pages/Home/Disclaimer";
import TermCondition from "./pages/Home/TermCondition";
import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/Blog/Blog";
import BlogDetailPage from "./pages/Blog/BlogDetailPage";
import MainLayout from "./layouts/MainLayout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/about-us"
        element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        }
      />
      <Route
        path="/services"
        element={
          <MainLayout>
            <Services />
          </MainLayout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <MainLayout>
            <Privacypolicy />
          </MainLayout>
        }
      />
      <Route
        path="/Disclaimer"
        element={
          <MainLayout>
            <Disclaimer />
          </MainLayout>
        }
      />
      <Route
        path="/Term-Condition"
        element={
          <MainLayout>
            <TermCondition />
          </MainLayout>
        }
      />
      <Route
        path="/Contact-Us"
        element={
          <MainLayout>
            <ContactUs />
          </MainLayout>
        }
      />
      <Route
        path="/blog"
        element={
          <MainLayout>
            <Blog />
          </MainLayout>
        }
      />
      <Route
        path="/blogs/:id"
        element={
          <MainLayout>
            <BlogDetailPage />
          </MainLayout>
        }
      />
    </Routes>
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

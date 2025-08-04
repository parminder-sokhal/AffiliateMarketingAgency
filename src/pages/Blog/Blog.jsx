import React, { useState, useEffect, useRef } from "react";
import BlogLatest from "../../components/BlogComponent/BlogLatest";
import { FaSearch, FaEllipsisV } from "react-icons/fa"; // Importing icons
import "../../styles/Blog/Blog.scss";
import CarouselSlider from "../../components/BlogComponent/CarouselSlider";
import BlogBoxComponent from "../../components/BlogComponent/BlogBoxComponent";
import TrendingPosts from "../../components/BlogComponent/TrendingPosts";
import SubscribeSection from "../../components/BlogComponent/SubscribeSection";
import BlogRecommended from "../../components/BlogComponent/BlogRecommended";
import BlogDetailPage from "./BlogDetailPage";


const Blog = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef= useRef(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement search logic 
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

// Close dropdown when clicking outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  }; 

  document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="blog-page">
      <hr className="custom-hr" />
      <div className="container">
        <div className="row">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search here..."
              className="search-input"
              value={searchQuery}
              onChange={handleSearch}
              aria-label="Search blogs"
            />
            <button className="search-button" aria-label="Search">
              <FaSearch className="search-icon" />
            </button>
          </div>
          <div className="dropdown" ref={dropdownRef}>
            <button
              onClick={toggleOptions}
              aria-expanded={showOptions}
              aria-label="Sort blog posts"
              className="dropdown-button"
            >
              <FaEllipsisV className="dropdown-icon" />
            </button>
            {showOptions && (
              <div className="dropdown-options">
                <ul role="menu">
                  {["Latest Posts", "Popular Posts", "Trending Posts"].map(
                    (option) => (
                      <li
                        key={option}
                        role="menuitem"
                        onClick={() => handleOptionSelect(option)}
                        className={selectedOption === option ? "selected" : ""}
                      >
                        {option}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="custom-hr" />
      <CarouselSlider />
      <BlogLatest />
      <BlogBoxComponent />
      <TrendingPosts />
      <SubscribeSection />
      <BlogRecommended />
    </main>
  );
};

export default Blog;
import React, { useState } from "react";
import BlogLatest from "../../components/BlogComponent/BlogLatest";
import { FaSearch, FaEllipsisV } from "react-icons/fa"; // Importing icons
import "../../styles/Blog/Blog.scss";
import CarouselSlider from "../../components/BlogComponent/CarouselSlider";
import BlogBoxComponent from "../../components/BlogComponent/BlogBoxComponent";
import TrendingPosts from "../../components/BlogComponent/TrendingPosts";
import SubscribeSection from "../../components/BlogComponent/SubscribeSection";
import BlogRecommended from "../../components/BlogComponent/BlogRecommended";

const Blog = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions); // Toggle the visibility of options
  };

  return (
    <>
      {/* <DefaultBanner componentName="Blogs" /> */}

      <hr className="custom-hr" />
      <div className="container">
        <div className="row">
          {/* Search Bar Section */}
          <div className="searchbar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          {/* Dropdown Section */}
          <div className="dropdown" onClick={toggleOptions}>
            <FaEllipsisV className="dropdown-icon" />
            {showOptions && (
              <div className="dropdown-options">
                <ul>
                  <li onClick={() => setSelectedOption("option1")}>
                    Latest Posts
                  </li>
                  <li onClick={() => setSelectedOption("option2")}>
                    Popular Posts
                  </li>
                  <li onClick={() => setSelectedOption("option3")}>
                    Trending Posts
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="custom-hr" />

      {/* CarouselSlider */}
      <CarouselSlider />

      {/* Blog Section */}
      <BlogLatest />

      {/* BlogBoxComponents */}
      <BlogBoxComponent />

      {/* TrendingPostComponent */}
      <TrendingPosts />

      {/* SubscribeSectionComponent */}
      <SubscribeSection />

      {/* BlogRecomendedComponent */}
      <BlogRecommended />
    </>
  );
};

export default Blog;

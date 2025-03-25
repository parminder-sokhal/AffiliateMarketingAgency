import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blog/BlogLayout.scss";

const BlogLatest = () => {
  const blogs = [
    {
      image: "/images/blogCard.png",
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Unveiling Hidden\nOpportunities Through\nAffiliate Data Analysis",
      // description: "Discover how affiliate data analysis can reveal untapped potential in your marketing strategies.",
    },
    {
      image: "/images/blogcard2.jpeg",
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Unveiling Hidden\nOpportunities Through\nAffiliate Data Analysis",
      // description: "Discover how affiliate data analysis can reveal untapped potential in your marketing strategies.",
    },
    {
      image: "/images/blogcard3.jpeg",
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Unveiling Hidden\nOpportunities Through\nAffiliate Data Analysis",
      // description: "Discover how affiliate data analysis can reveal untapped potential in your marketing strategies.",
    },
    {
      image: "/images/blogcard4.jpeg",
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Unveiling Hidden\nOpportunities Through\nAffiliate Data Analysis",
      // description: "Discover how affiliate data analysis can reveal untapped potential in your marketing strategies.",
    },
    // ... other blog items
  ];

  const navigate = useNavigate();

  return (
    <div className="blog-latest-container">
      <div className="blog-cards-container">
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className="blog-card"
            style={{ backgroundImage: `url(${blog.image})` }}
            onClick={() => navigate("/blogs/details")}
          >
            <div className="content-overlay">
              <div className="meta-info">
                <span className="category">{blog.category}</span>
                <span className="read-time">{blog.readTime}</span>
              </div>
              <div className="text-content">
                <h3 className="title">
                  {blog.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
                {/* <p className="description">{blog.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLatest;
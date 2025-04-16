import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blog/BlogLayout.scss";

const BlogLatest = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      image: "/images/blogCard.png",
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Unveiling Hidden Opportunities Through Affiliate Data Analysis",
      id: 1,
    },
    {
      image: "/images/blogcard2.jpeg",
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Unveiling Hidden Opportunities Through Affiliate Data Analysis",
      id: 2,
    },
    {
      image: "/images/blogcard3.jpeg",
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Unveiling Hidden Opportunities Through Affiliate Data Analysis",
      id: 3,
    },
    {
      image: "/images/blogcard4.jpeg",
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Unveiling Hidden Opportunities Through Affiliate Data Analysis",
      id: 4,
    },
  ];

  return (
    <section className="blog-latest-container" aria-label="Latest blog posts">
      <div className="blog-cards-container">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="blog-card"
            style={{ backgroundImage: `url(${blog.image})` }}
            onClick={() => navigate(`/blogs/${blog.id}`)}
            tabIndex={0}
            role="button"
            aria-label={`Read more about ${blog.title}`}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/blogs/${blog.id}`)}
          >
            <div className="content-overlay">
              <div className="meta-info">
                <span className="category">{blog.category}</span>
                <span className="read-time">{blog.readTime}</span>
              </div>
              <div className="text-content">
                <h3 className="title">{blog.title}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogLatest;
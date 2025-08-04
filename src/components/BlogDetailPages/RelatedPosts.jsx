import React from "react";
import "../../styles/Blog/RelatedPosts.scss";


const RelatedPosts = () => {
  const posts = [
    {
      id: 1,
      image: "/images/blogCard.png", // Replace with actual image path
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Essential Metrics to Monitor in Your Affiliate Program",
    },
    {
      id: 2,
      image: "/images/blogCard.png", // Replace with actual image path
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Essential Metrics to Monitor in Your Affiliate Program",
    },
    {
      id: 3,
      image: "/images/blogCard.png", // Replace with actual image path
      category: "Data & Analysis",
      readTime: "5 min read",
      title: "Essential Metrics to Monitor in Your Affiliate Program",
    },
  ];

  return (
    <section className="related-posts">
      <h2>Related Post</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-meta">
              <span className="category">{post.category}</span>
              <span className="read-time">{post.readTime}</span>
            </div>
            <h3 className="post-title">{post.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
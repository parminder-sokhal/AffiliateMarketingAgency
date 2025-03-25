import React from 'react';
import '../../styles/Blog/BlogRecommended.scss';

const BlogRecommended = () => {
  const featuredPost = {
    category: 'Program Design',
    readTime: '5 min read',
    title: 'How to Build a High-Performing Affiliate Program from Scratch',
    description: 'A step-by-step guide on...',
    imageUrl: '/images/blogreco.jpeg',
  };

  const recommendedPosts = [
    {
      category: 'Data & Analysis',
      readTime: '5 min read',
      title: 'Unleashing the Power of Data in Affiliate Marketing',
      description: 'Learn how to gather and leverage data...',
    },
    {
      category: 'Program Design',
      readTime: '5 min read',
      title: 'How to Build a High-Performing Affiliate Program from Scratch',
      description: 'A step-by-step guide on...',
    },
    {
      category: 'Data & Analysis',
      readTime: '5 min read',
      title: 'Unleashing the Power of Data in Affiliate Marketing',
      description: 'Learn how to gather and leverage data...',
    },
    {
      category: 'Program Design',
      readTime: '5 min read',
      title: 'Essential Metrics to Monitor in Your Affiliate Program',
      description: 'A guide to the key performance metrics...',
    },
  ];

  const additionalFeaturedPosts = [
    {
      category: 'Program Design',
      readTime: '5 min read',
      title: 'How to Build a High-Performing Affiliate Program from Scratch',
      description: 'A step-by-step guide on...',
      imageUrl: '/images/blogreco.jpeg',
    },
    {
      category: 'Program Design',
      readTime: '5 min read',
      title: 'How to Build a High-Performing Affiliate Program from Scratch',
      description: 'A step-by-step guide on...',
      imageUrl: '/images/blogreco.jpeg',
    },
  ];

  return (
    <div className="blog-recommended">
      <h2 className="blog-recommended__title">Recommended Posts</h2>
      <div className="blog-recommended__wrapper">
        {/* First Container: Featured Post (left) and 4 Cards in 2x2 Grid (right) */}
        <div className="blog-recommended__container">
          <div className="blog-recommended__featured">
            <div className="featured-post">
              <div className="featured-post__image">
                <img src={featuredPost.imageUrl} alt={featuredPost.title} />
              </div>
              <div className="featured-post__content">
                <div className="featured-post__meta">
                  <span className="featured-post__category">{featuredPost.category}</span>
                  <span className="featured-post__read-time">{featuredPost.readTime}</span>
                </div>
                <h3 className="featured-post__title">{featuredPost.title}</h3>
                <p className="featured-post__description">{featuredPost.description}</p>
              </div>
            </div>
          </div>

          {/* 4 Recommended Posts in a 2x2 Grid */}
          <div className="blog-recommended__grid">
            {recommendedPosts.map((post, index) => (
              <div className="post-card" key={index}>
                <div className="post-card__meta">
                  <span className="post-card__category">{post.category}</span>
                  <span className="post-card__read-time">{post.readTime}</span>
                </div>
                <h3 className="post-card__title">{post.title}</h3>
                <p className="post-card__description">{post.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Container: 2 Image Cards in a Row */}
        <div className="blog-recommended__additional-featured">
          {additionalFeaturedPosts.map((post, index) => (
            <div className="featured-post" key={index}>
              <div className="featured-post__image">
                <img src={post.imageUrl} alt={post.title} />
              </div>
              <div className="featured-post__content">
                <div className="featured-post__meta">
                  <span className="featured-post__category">{post.category}</span>
                  <span className="featured-post__read-time">{post.readTime}</span>
                </div>
                <h3 className="featured-post__title">{post.title}</h3>
                <p className="featured-post__description">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogRecommended;
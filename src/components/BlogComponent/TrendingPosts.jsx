import React from 'react';
import PostCard from './PostCard';
import ImagePostCard from './ImagePostCard';
import '../../styles/Blog/TrendingPosts.scss';

const TrendingPosts = () => {
  const leftPosts = [
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
      title: 'How to Build a High-Performing Affiliate Program from Scratch',
      description: 'A step-by-step guide on...',
    },
  ];

  const rightPost = {
    category: 'Program Design',
    readTime: '5 min read',
    title: 'How to Build a High-Performing Affiliate Program from Scratch',
    description: 'A step-by-step guide on...',
    imageUrl: '/images/implementation.jpg', 
  };

  return (
    <div className="trending-posts">
      <h2 className="trending-posts__title">Trending Posts</h2>
      <div className="trending-posts__container">
        <div className="trending-posts__left">
          {leftPosts.map((post, index) => (
            <div key={index}>
            <PostCard {...post} />
            {/* <hr className="post-card__separator" /> */}
          </div>
          ))}
        </div>
        <div className="trending-posts__right">
          <ImagePostCard {...rightPost} />
        </div>
      </div>
    </div>
  );
};

export default TrendingPosts;
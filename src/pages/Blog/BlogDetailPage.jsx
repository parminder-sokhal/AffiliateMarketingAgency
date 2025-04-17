import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaEye, FaHeart, FaComment, FaUser, FaShare, FaFacebookF, FaWhatsapp, FaTwitter, FaCopy } from "react-icons/fa";
import "../../styles/Blog/BlogDetailPage.scss";
import TableOfContent from "../../components/BlogDetailPages/TableOfContent";
import Categories from "../../components/BlogDetailPages/Categories";
import LikeDislike from "../../components/BlogDetailPages/LikeDislike";
import SubscribeSection from "../../components/BlogComponent/SubscribeSection";
import RelatedPosts from "../../components/BlogDetailPages/RelatedPosts";
import Faq from "react-faq-component";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [selectedTab, setSelectedTab] = useState("popular");
  const [showSharePopup, setShowSharePopup] = useState(false);
  const blogUrl = window.location.href;

  useEffect(() => {
    const fetchBlog = () => {
      const baseUrl = import.meta.env.BASE_URL || "/";
      const detailBlog = {
        id,
        image: `${baseUrl}images/blogcard2.jpeg`,
        title: "Program Design Strategies That Drive Affiliate Success",
        author: "John Thomas",
        readTime: "3 min read",
        stats: { views: 200, likes: 100, comments: 50 },
        content:
          "A well-designed affiliate program boosts growth by setting clear goals and the right commission structure. Engaging and supporting affiliates is key to long-term success. This blog explores key strategies for success.",
        popularPosts: [
          {
            id: 1,
            title: "How to Create an Affiliate Program That Attracts Top Partners",
            readTime: "5 min read",
            description: "Learn strategies to design a successful affiliate program.",
            image: `${baseUrl}images/blogcard2.jpeg`,
          },
          {
            id: 2,
            title: "How to Create an Affiliate Program That Attracts Top Partners",
            readTime: "5 min read",
            description: "Learn strategies to design a successful affiliate program.",
            image: `${baseUrl}images/blogcard2.jpeg`,
          },
          {
            id: 3,
            title: "How to Create an Affiliate Program That Attracts Top Partners",
            readTime: "5 min read",
            description: "Learn strategies to design a successful affiliate program.",
            image: `${baseUrl}images/blogcard2.jpeg`,
          },
          {
            id: 4,
            title: "How to Create an Affiliate Program That Attracts Top Partners",
            readTime: "5 min read",
            description: "Learn strategies to design a successful affiliate program.",
            image: `${baseUrl}images/blogcard2.jpeg`,
          },
        ],
        recentPosts: [
          {
            id: 1,
            title: "The Future of Digital Marketing",
            readTime: "5 min read",
            description: "An overview of future trends in the digital marketing world.",
            image: `${baseUrl}images/blogCard1.jpeg`,
          },
          {
            id: 2,
            title: "AI in Action",
            readTime: "3 min read",
            description: "Exploring how AI is transforming industries.",
            image: `${baseUrl}images/blogCard1.jpeg`,
          },
        ],
        tableOfContent: [
          "Introduction",
          "Understanding Your Audience",
          "Defining Clear Objectives",
          "Choosing the Right Affiliates",
          "Crafting Competitive Incentives",
          "Providing Robust Support",
          "Implementing Advanced Tracking and Analytics",
          "Focusing on User Experience",
          "Building Strong Relationships",
          "Prioritizing Compliance",
          "Conclusion",
          "FAQ",
        ],
        categories: [
          { title: "Data & Analysis", image: `${baseUrl}images/blogcard2.jpeg` },
          { title: "Program Design", image: `${baseUrl}images/blogcard2.jpeg` },
          { title: "Compliance and Fraud Monitoring", image: `${baseUrl}images/blogcard2.jpeg` },
          { title: "Partnership Optimisation", image: `${baseUrl}images/blogcard2.jpeg` },
        ],
        detailedContent: [
          {
            title: "Introduction",
            content:
              "Affiliate marketing continues to be a cornerstone of digital marketing strategies, offering businesses an efficient way to expand their reach, drive revenue, and build lasting partnerships. However, the success of an affiliate program isn't automatic—it hinges on a well-crafted design and strategic execution. In this post, we'll walk you through actionable strategies to create a high-performing affiliate program that delivers measurable success.",
            points: [
              "Identify key market trends.",
              "Set a foundation for affiliate partnerships.",
            ],
          },
          {
            title: "Understanding Your Audience",
            content:
              "The foundation of a successful affiliate program lies in understanding your target audience. Knowing their preferences, pain points, and motivations allows you to design an affiliate program that resonates with them. Actionable Steps: • Conduct detailed market research and analyze customer demographics. • Develop buyer personas that represent your ideal audience. • Tailor your affiliate program to meet the specific needs of these personas. By aligning your program with the expectations of your audience, affiliates can market your offerings effectively.",
            points: [
              "Analyze customer behavior.",
              "Create targeted marketing campaigns.",
            ],
          },
          {
            title: "Defining Clear Objectives",
            content:
              "Set measurable goals for your affiliate program. Whether the focus is on increasing sales, generating leads, or driving traffic, having clear objectives allows you to design a program that aligns with your overall business goals.",
            points: [
              "Define KPIs for success.",
              "Align goals with business strategy.",
            ],
          },
          {
            title: "Choosing the Right Affiliates",
            content:
              "Selecting the right affiliates is crucial for program success. Look for partners with aligned values and a strong online presence to maximize reach and credibility.",
            points: [
              "Evaluate affiliate reputation.",
              "Match affiliate niches with your brand.",
            ],
          },
          {
            title: "Crafting Competitive Incentives",
            content:
              "Offer competitive commissions and bonuses to motivate affiliates. A well-structured incentive plan can drive higher engagement and performance.",
            points: [
              "Set tiered commission rates.",
              "Provide performance bonuses.",
            ],
          },
          {
            title: "Providing Robust Support",
            content:
              "Support your affiliates with training, marketing materials, and regular communication to ensure their success and loyalty.",
            points: [
              "Offer regular webinars.",
              "Provide updated marketing kits.",
            ],
          },
          {
            title: "Implementing Advanced Tracking and Analytics",
            content:
              "Use advanced tracking tools to monitor performance and optimize your affiliate program in real-time.",
            points: [
              "Install tracking pixels.",
              "Analyze conversion rates.",
            ],
            image: `${baseUrl}images/blogcard3.jpeg`, // Example image
          },
          {
            title: "Focusing on User Experience",
            content:
              "Ensure your website and affiliate links provide a seamless user experience to boost conversions.",
            points: [
              "Optimize page load times.",
              "Simplify navigation.",
            ],
          },
          {
            title: "Building Strong Relationships",
            content:
              "Foster long-term relationships with affiliates through recognition and collaboration opportunities.",
            points: [
              "Host affiliate meetups.",
              "Recognize top performers.",
            ],
          },
          {
            title: "Prioritizing Compliance",
            content:
              "Adhere to legal and ethical standards to protect your brand and affiliates.",
            points: [
              "Follow FTC guidelines.",
              "Ensure transparent disclosures.",
            ],
          },
          {
            title: "Conclusion",
            content:
              "A successful affiliate program requires strategic planning, continuous optimization, and strong partnerships. Implement these strategies to achieve sustainable growth.",
            points: [
              "Review program performance quarterly.",
              "Adapt to market changes.",
            ],
          },
          {
            title: "FAQ",
            content:
              "Address common questions about affiliate programs to assist affiliates and businesses.",
            points: [
              "What is the commission rate?",
              "How do I join the program?",
            ],
          },
        ],
      };
      setBlog(detailBlog);
    };
    fetchBlog();
  }, [id]);

  const handleTabClick = (tab) => setSelectedTab(tab);

  const handleShareClick = () => setShowSharePopup(true);

  const handleClosePopup = () => setShowSharePopup(false);

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`, "_blank");
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(blogUrl)}`, "_blank");
  };

  const shareOnX = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(blog.title)}`, "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(blogUrl).then(() => {
      alert("Link copied to clipboard!");
      handleClosePopup();
    });
  };

  if (!blog) return <div className="loading">Loading...</div>;

  // Prepare FAQ data
  const faqData = {
    title: "FAQ ",
    rows: blog.detailedContent
      .find((section) => section.title === "FAQ")
      .points.map((point) => ({
        title: point,
        content: `This is a placeholder answer for ${point}. Provide detailed response here.`,
      })),
  };

  // Define styles
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
    rowContentTextSize: "16px",
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "50px",
  };

  // Define config
  const config = {
    animate: true,
  };

  return (
    <div className="blog-detail-page">
      <div className="blog-header">
        <h1>{blog.title}</h1>
        <div className="header-meta">
          <div className="author-info" role="region" aria-label="Author details">
            <FaUser />
            <span className="author-name">{blog.author}</span>
            <span className="read-time">{blog.readTime}</span>
          </div>
          <div className="blog-stats" role="region" aria-label="Blog statistics">
            <span className="stat-item">
              <FaEye /> {blog.stats.views}
            </span>
            <span className="stat-item">
              <FaHeart /> {blog.stats.likes}
            </span>
            <span className="stat-item">
              <FaComment /> {blog.stats.comments}
            </span>
            <span className="stat-item share-icon" onClick={handleShareClick} aria-label="Share this blog">
              <FaShare />
            </span>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-left">
          <img
            src={blog.image}
            alt={`Featured image for ${blog.title}`}
            onError={(e) => (e.target.src = `${import.meta.env.BASE_URL}images/default.jpg`)}
          />
          <div className="blog-body">
            <p>{blog.content}</p>
          </div>
        </div>
        <div className="content-right">
          <div className="tab-buttons">
            <button
              onClick={() => handleTabClick("popular")}
              className={selectedTab === "popular" ? "active" : ""}
              aria-label="Show popular posts"
            >
              Popular Posts
            </button>
            <button
              onClick={() => handleTabClick("recent")}
              className={selectedTab === "recent" ? "active" : ""}
              aria-label="Show recent posts"
            >
              Recent Posts
            </button>
          </div>
          <div className="blog-cards">
            {(selectedTab === "popular" ? blog.popularPosts : blog.recentPosts).map((post) => (
              <div className="blog-card" key={post.id}>
                <img
                  src={post.image}
                  alt={`Image for ${post.title}`}
                  onError={(e) => (e.target.src = `${import.meta.env.BASE_URL}images/default.jpg`)}
                />
                <div className="card-content">
                  <h3 className="card-title">{post.title}</h3>
                  <span className="read-time">{post.readTime}</span>
                  <p className="card-description">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showSharePopup && (
        <div className="share-popup" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Share This Blog</h3>
            <div className="icon-row">
              <button onClick={shareOnFacebook} className="share-button facebook" aria-label="Share on Facebook">
                <FaFacebookF />
              </button>
              <button onClick={shareOnWhatsApp} className="share-button whatsapp" aria-label="Share on WhatsApp">
                <FaWhatsapp />
              </button>
              <button onClick={shareOnX} className="share-button twitter" aria-label="Share on X">
                <FaTwitter />
              </button>
              <button onClick={copyToClipboard} className="share-button copy" aria-label="Copy Link">
                <FaCopy />
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="sidebar-section">
        <TableOfContent tableOfContent={blog.tableOfContent} />
        <Categories categories={blog.categories} />
      </div>
      <div className="content-details-section">
        <div className="content-details">
          {blog.detailedContent
            .filter((section) => section.title !== "FAQ")
            .map((section, index) => (
              <div key={index} className="content-item" id={section.title.toLowerCase().replace(/ /g, "-")}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
                {section.points && (
                  <ul>
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                )}
                {section.image && (
                  <img
                    src={section.image}
                    alt={`${section.title} image`}
                    onError={(e) => (e.target.src = `${import.meta.env.BASE_URL}images/default.jpg`)}
                    className="detail-image"
                  />
                )}
              </div>
            ))}
          {/* Render Faq component for the FAQ section */}
          {blog.detailedContent.some((section) => section.title === "FAQ") && (
            <div className="content-item" id="faq">
              <Faq data={faqData} styles={styles} config={config} />
            </div>
          )}
        </div>
      </div>
      <LikeDislike />
      <SubscribeSection />
      <RelatedPosts />
    </div>
  );
};

export default BlogDetailPage;
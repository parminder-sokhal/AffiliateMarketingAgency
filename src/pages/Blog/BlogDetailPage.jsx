import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaEye, FaHeart, FaComment, FaUser } from 'react-icons/fa'
import '../../styles/Blog/BlogDetailPage.scss'
import TableOfContent from '../../components/BlogDetailPages/TableOfContent'
import LikeDislike from '../../components/BlogDetailPages/NavigationControls'
import RelatedPosts from '../../components/BlogDetailPages/RelatedPosts'
import FaqAccordion from '../../components/BlogComponent/FaqAccordion'

const BlogDetailPage = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const fetchBlog = () => {
      const baseUrl = import.meta.env.BASE_URL || '/'
      const detailBlog = {
        id,
        image: `${baseUrl}images/blogcard2.jpeg`,
        title: 'Program Design Strategies That Drive Affiliate Success',
        author: 'John Thomas',
        readTime: '3 min read',
        stats: { views: 200, likes: 100, comments: 50 },
        content:
          'A well-designed affiliate program boosts growth by setting clear goals and the right commission structure. Engaging and supporting affiliates is key to long-term success. This blog explores key strategies for success.',
        tableOfContent: [
          'Introduction',
          'Understanding Your Audience',
          'Defining Clear Objectives',
          'Choosing the Right Affiliates',
          'Crafting Competitive Incentives',
          'Providing Robust Support',
          'Implementing Advanced Tracking and Analytics',
          'Focusing on User Experience',
          'Building Strong Relationships',
          'Prioritizing Compliance',
          'Conclusion',
          'FAQ',
        ],
        detailedContent: [
          {
            title: 'Introduction',
            content:
              'Affiliate marketing continues to be a cornerstone of digital marketing strategies, offering businesses an efficient way to expand their reach, drive revenue, and build lasting partnerships. However, the success of an affiliate program isn’t automatic—it hinges on a well-crafted design and strategic execution. In this post, we’ll walk you through actionable strategies to create a high-performing affiliate program that delivers measurable success.',
          },
          {
            title: 'Understanding Your Audience',
            content:
              'The foundation of a successful affiliate program lies in understanding your target audience. Knowing their preferences, pain points, and motivations allows you to design an affiliate program that resonates with them. Actionable Steps: • Conduct detailed market research and analyze customer demographics. • Develop buyer personas that represent your ideal audience. • Tailor your affiliate program to meet the specific needs of these personas. By aligning your program with the expectations of your audience, affiliates can market your offerings effectively.',
            points: [
              'Analyze customer behavior.',
              'Create targeted marketing campaigns.',
            ],
          },
          {
            title: 'Defining Clear Objectives',
            content:
              'Set measurable goals for your affiliate program. Whether the focus is on increasing sales, generating leads, or driving traffic, having clear objectives allows you to design a program that aligns with your overall business goals.',
            points: [
              'Define KPIs for success.',
              'Align goals with business strategy.',
            ],
          },
          {
            title: 'Choosing the Right Affiliates',
            content:
              'Selecting the right affiliates is crucial for program success. Look for partners with aligned values and a strong online presence to maximize reach and credibility.',
            points: [
              'Evaluate affiliate reputation.',
              'Match affiliate niches with your brand.',
            ],
          },
          {
            title: 'Crafting Competitive Incentives',
            content:
              'Offer competitive commissions and bonuses to motivate affiliates. A well-structured incentive plan can drive higher engagement and performance.',
            points: [
              'Set tiered commission rates.',
              'Provide performance bonuses.',
            ],
          },
          {
            title: 'Providing Robust Support',
            content:
              'Support your affiliates with training, marketing materials, and regular communication to ensure their success and loyalty.',
            points: [
              'Offer regular webinars.',
              'Provide updated marketing kits.',
            ],
          },
          {
            title: 'Implementing Advanced Tracking and Analytics',
            content:
              'Use advanced tracking tools to monitor performance and optimize your affiliate program in real-time.',
            points: ['Install tracking pixels.', 'Analyze conversion rates.'],
            image: `${baseUrl}images/blogcard3.jpeg`,
          },
          {
            title: 'Focusing on User Experience',
            content:
              'Ensure your website and affiliate links provide a seamless user experience to boost conversions.',
            points: ['Optimize page load times.', 'Simplify navigation.'],
          },
          {
            title: 'Building Strong Relationships',
            content:
              'Foster long-term relationships with affiliates through recognition and collaboration opportunities.',
            points: ['Host affiliate meetups.', 'Recognize top performers.'],
          },
          {
            title: 'Prioritizing Compliance',
            content:
              'Adhere to legal and ethical standards to protect your brand and affiliates.',
            points: [
              'Follow FTC guidelines.',
              'Ensure transparent disclosures.',
            ],
          },
          {
            title: 'Conclusion',
            content:
              'A successful affiliate program requires strategic planning, continuous optimization, and strong partnerships. Implement these strategies to achieve sustainable growth.',
            points: [
              'Review program performance quarterly.',
              'Adapt to market changes.',
            ],
          },
        ],
      }
      setBlog(detailBlog)
    }
    fetchBlog()
  }, [id])

  if (!blog) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="blog-detail-page">
      {/* Blog Header */}
      <div className="blog-header">
        <h1>{blog.title}</h1>
        <div className="header-meta">
          <div
            className="author-info"
            role="region"
            aria-label="Author details"
          >
            <FaUser />
            <span className="author-name">{blog.author}</span>
            <span className="read-time">{blog.readTime}</span>
          </div>
          <div
            className="blog-stats"
            role="region"
            aria-label="Blog statistics"
          >
            <span className="stat-item">
              <FaEye /> {blog.stats.views}
            </span>
            <span className="stat-item">
              <FaHeart /> {blog.stats.likes}
            </span>
            <span className="stat-item">
              <FaComment /> {blog.stats.comments}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        <div className="content-left">
          <img
            src={blog.image}
            alt={`Featured image for ${blog.title}`}
            onError={(e) =>
              (e.target.src = `${import.meta.env.BASE_URL}images/default.jpg`)
            }
          />
          <div className="blog-body">
            <p>{blog.content}</p>
          </div>
        </div>
      </div>

      {/* Sidebar with Table of Content */}
      <div className="sidebar-section">
        <TableOfContent tableOfContent={blog.tableOfContent} />
      </div>

      {/* Detailed Content Sections */}
      <div className="content-details-section">
        <div className="content-details">
          {blog.detailedContent.map((section, index) => (
            <div
              key={index}
              className="content-item"
              id={section.title.toLowerCase().replace(/ /g, '-')}
            >
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
                  onError={(e) =>
                    (e.target.src = `${
                      import.meta.env.BASE_URL
                    }images/default.jpg`)
                  }
                  className="detail-image"
                />
              )}
            </div>
          ))}

          {/* Anchor for ToC "FAQ" link */}
          <div id="faq"></div>

          {/* FAQ Section */}
          <FaqAccordion />
        </div>
      </div>

      {/* Additional Components */}
      <LikeDislike />
      <RelatedPosts />
    </div>
  )
}

export default BlogDetailPage

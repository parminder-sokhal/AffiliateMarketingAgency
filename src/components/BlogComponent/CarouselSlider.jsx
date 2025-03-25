import React, { useState } from "react";
import "../../styles/Blog/CarouselSlider.scss";
import { useNavigate } from "react-router-dom";

const CarouselSlider = () => {
  const navigate= useNavigate()
  const slides = [
    {
      id:1,
      image: "/images/blogCard.png",
      category: "Program Design",
      readTime: "2.3 min read",
      title: "Program Design Strategies That\nDrive Affiliate Success",
      // subtitle: "Discover how strategic program design can maximize your affiliate marketing results.",
    },
    {
      id:2, 
      image: "/img/slide2.jpg",
      category: "AI Technology",
      readTime: "4.1 min read",
      title: "AI in Action\nTransforming Industries",
      // subtitle: "Learn how AI is revolutionizing business operations.",
    },
    {
      id:3,
      image: "/img/slide3.jpg",
      category: "Future Trends",
      readTime: "5 min read",
      title: "The Future of\nDigital Marketing",
      // subtitle: "Explore emerging trends in the marketing landscape.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleSlideClick=(id)=>{
    navigate(`/blog/${id}`)
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-slide"
        onClick={()=>handleSlideClick(slides[currentSlide].id)}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="carousel-image"
          />
          <div className="carousel-content">
            <div className="carousel-meta">
              <span className="category">{slides[currentSlide].category}</span>
              <span className="read-time">{slides[currentSlide].readTime}</span>
            </div>
            <h2 className="carousel-title">
              {slides[currentSlide].title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <p className="carousel-subtitle">{slides[currentSlide].subtitle}</p>
          </div>
        </div>
      </div>

      <div className="carousel-arrow carousel-left" onClick={prevSlide}>
        &#8249;
      </div>
      <div className="carousel-arrow carousel-right" onClick={nextSlide}>
        &#8250;
      </div>
    </div>
  );
};

export default CarouselSlider;
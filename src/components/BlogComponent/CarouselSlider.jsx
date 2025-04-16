import React, { useState } from "react";
import "../../styles/Blog/CarouselSlider.scss";
import { useNavigate } from "react-router-dom";


const CarouselSlider = () => {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      image: "/images/blogCard.png",
      category: "Program Design",
      readTime: "2.3 min read",
      title: "Program Design Strategies That Drive Affiliate Success",
    },
    {
      id: 2,
      image: "/images/slide2.jpg",
      category: "AI Technology",
      readTime: "4.1 min read",
      title: "AI in Action Transforming Industries",
    },
    {
      id: 3,
      image: "/images/slide3.jpg",
      category: "Future Trends",
      readTime: "5 min read",
      title: "The Future of Digital Marketing",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="carousel-container" aria-label="Featured blog posts">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <article
            key={slide.id}
            className="carousel-slide"
            onClick={() => navigate(`/blogs/${slide.id}`)}
            tabIndex={0}
            role="button"
            aria-label={`Read more about ${slide.title}`}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/blogs/${slide.id}`)}
          >
            <picture>
              <img
                src={slide.image}
                alt={slide.title}
                className="carousel-image"
                loading="lazy"
              />
            </picture>
            <div className="carousel-content">
              <div className="carousel-meta">
                <span className="category">{slide.category}</span>
                <span className="read-time">{slide.readTime}</span>
              </div>
              <h2 className="carousel-title">{slide.title}</h2>
            </div>
          </article>
        ))}
      </div>
      <button
        className="carousel-arrow carousel-left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="carousel-arrow carousel-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
};

export default CarouselSlider;
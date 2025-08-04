import React, { useState } from 'react'
import '../../styles/BlogDetailPage/NavigationControls.scss'

const NavigationControls = () => {
  const [currentIndex, setCurrentIndex] = useState(0) // Track current post index
  const totalPosts = 10 // Example: total number of posts (replace with actual data)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0)) // Prevent going below 0
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPosts - 1)) // Prevent going above totalPosts
  }

  return (
    <div
      className="navigation-container"
      role="region"
      aria-label="Navigation Controls"
    >
      <button
        className="previous-button"
        onClick={handlePrevious}
        aria-label="Go to previous post"
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      <button
        className="next-button"
        onClick={handleNext}
        aria-label="Go to next post"
        disabled={currentIndex === totalPosts - 1}
      >
        Next
      </button>
    </div>
  )
}

export default NavigationControls

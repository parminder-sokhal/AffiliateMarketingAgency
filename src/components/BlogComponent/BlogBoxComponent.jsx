import React, { useEffect, useRef, useState } from 'react'
import '../../styles/Blog/BlogBoxComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

const BlogBoxComponent = () => {
  const categories = [
    'Program Design',
    'Data & Analysis',
    'Compliance & Fraud Monitoring',
    'Partnership Optimization',
  ]

  const containerRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const slugify = (s) =>
    s
      .toLowerCase()
      .replace(/\s*&\s*/g, '-')
      .replace(/\s+/g, '-')

  const updateButtons = () => {
    const el = containerRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanPrev(scrollLeft > 0)
    setCanNext(scrollLeft + clientWidth < scrollWidth - 1)
  }

  useEffect(() => {
    updateButtons()
    const el = containerRef.current
    if (!el) return

    el.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)

    return () => {
      el.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [])

  const scrollAmount = () => {
    const el = containerRef.current
    if (!el) return 300
    return Math.max(200, Math.round(el.clientWidth * 0.7))
  }

  const handlePrev = () => {
    const el = containerRef.current
    if (!el) return
    el.scrollBy({ left: -scrollAmount(), behavior: 'smooth' })
  }

  const handleNext = () => {
    const el = containerRef.current
    if (!el) return
    el.scrollBy({ left: scrollAmount(), behavior: 'smooth' })
  }

  return (
    <nav className="outer-box" aria-label="Blog categories">
      <div
        className="inner-box-container"
        ref={containerRef}
        role="listbox"
        aria-label="Category list"
      >
        {categories.map((category, index) => (
          <div key={category} className="inner-box" role="option">
            <a href={`#${slugify(category)}`}>{category}</a>
            {index < categories.length - 1 && (
              <span className="divider" aria-hidden="true">
                |
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="navbar-buttons-right">
        <button
          aria-label="Previous categories"
          onClick={handlePrev}
          disabled={!canPrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          aria-label="Next categories"
          onClick={handleNext}
          disabled={!canNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </nav>
  )
}

export default BlogBoxComponent

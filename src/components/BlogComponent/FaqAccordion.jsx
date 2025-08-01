import React, { useState } from 'react'
import '../../styles/BlogDetailPage/FaqAccordion.scss'

const faqs = [
  {
    q: 'What is an affiliate program?',
    a: 'An affiliate program is a partnership between a business and external affiliates where affiliates promote the business’s products or services. In return, they earn a commission for every successful lead, sale, or conversion they generate.',
  },
  {
    q: 'Why is program design important for affiliate success?',
    a: 'A well-structured program clarifies payouts, rules, and tracking, which motivates affiliates and improves performance.',
  },
  {
    q: 'How do I select the right affiliates for my program?',
    a: 'Look for partners whose audiences match your target market and who have a history of authentic promotion.',
  },
  {
    q: 'What are some effective incentive strategies for affiliates?',
    a: 'Tiered commissions, bonuses for milestones, and exclusive offers often increase engagement.',
  },
  {
    q: 'How do I track the performance of my affiliate program?',
    a: 'Use reliable tracking software/UTMs to monitor clicks, conversions, AOV, and ROI—and share dashboards with affiliates.',
  },
]

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0) // first item open like screenshot

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx))
  }

  return (
    <section className="faq" aria-label="Frequently Asked Questions">
      <h3 className="faq__heading">FAQ</h3>

      <ul className="faq__list">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx
          const panelId = `faq-panel-${idx}`
          const buttonId = `faq-btn-${idx}`
          return (
            <li className="faq__item" key={idx}>
              <button
                id={buttonId}
                className={`faq__button ${isOpen ? 'is-open' : ''}`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
              >
                <span className="faq__question">{item.q}</span>
                <svg
                  className="faq__chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M7 10l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`faq__panel ${isOpen ? 'is-open' : ''}`}
              >
                <p className="faq__answer">{item.a}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FaqAccordion

import { useState, useEffect, useRef } from 'react';
import './FAQ.css';
interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in');
            }, index * 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [headingRef.current, faqsRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const faqs: FAQItem[] = [
    {
      question: 'What is AdMandala?',
      answer:
        'AdMandala is an SSP / Ad Exchange that monetizes your inventory via OpenRTB demand.',
    },
    {
      question: 'What traffic do you accept?',
      answer:
        'Mainstream (high-intent & general) and Adult (tiered by GEO). Organic real human traffic only.',
    },
    {
      question: 'What formats are supported?',
      answer:
        'Inweb banners only for the time being.',
    },
    {
      question: 'How is revenue calculated?',
      answer:
        'CPM model. Revenue = (Impressions ÷ 1000) × CPM. CPM is being calculated on the bidding mechanism on our advertiser\'s preference. We make sure to give best monetization experience for early joiners.',
    },
    {
      question: 'What are the payment terms?',
      answer:
        'Net 30. Early partners may receive flexibility.',
    },
    {
      question: 'What is the minimum payout?',
      answer:
        '$50 minimum balance required for withdrawal.',
    },
    {
      question: 'How do you pay?',
      answer:
        'Bank transfer (invoice required) or USDT for selected regions only (private wallet only).',
    },
    {
      question: 'What can lead to suspension?',
      answer:
        'Bot traffic, auto-clicks, misrepresentation, fraud, or low-quality inventory. AdMandala may terminate accounts without prior notice if standards are violated.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="faqs-section" id="faqs">
      <div className="faqs-container">
        <div ref={headingRef} className="faqs-heading-content">
          <span className="section-badge">Your Queries, Simplified</span>
          <h2 className="faq-heading">Questions? Answers!</h2>
          <p className="features-description">
            Find quick answers to the most common questions about our platform
          </p>
        </div>

        <div ref={faqsRef} className="faqs-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

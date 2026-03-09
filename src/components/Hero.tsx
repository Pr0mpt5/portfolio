import React, { useEffect, useState } from 'react';
import './Hero.css';

const titles = [
  'Cybersecurity Specialist',
  'Cloud Security Expert',
  'Network Security Analyst',
  'Identity & Access Management Pro',
];

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, isDeleting ? speed : charIndex === 0 ? 0 : speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  const handleScroll = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="cyber-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="hero-content">
        <div>
          <div className="hero-greeting">$ Greetings, I'm</div>
          <h1 className="hero-name">Jhon A</h1>
          <div className="hero-title">
            {displayText}
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            Cybersecurity professional with expertise in vulnerability management, cloud infrastructure,
            and identity access management. Passionate about securing enterprise networks and building
            resilient security architectures. AWS Certified and pursuing Security+.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={handleScroll}>
              View My Work
            </button>
            <button className="btn-secondary">Download Resume</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="security-shield">
            <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00d9ff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#00ff88', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M100,20 L170,60 L170,120 C170,180 130,220 100,235 C70,220 30,180 30,120 L30,60 Z"
                fill="url(#shieldGrad)"
                opacity="0.15"
                stroke="url(#shieldGrad)"
                strokeWidth="2"
              />
              <path
                d="M100,40 L155,75 L155,120 C155,170 120,205 100,218 C80,205 45,170 45,120 L45,75 Z"
                fill="none"
                stroke="url(#shieldGrad)"
                strokeWidth="2"
              />
              <circle cx="100" cy="110" r="25" fill="none" stroke="url(#shieldGrad)" strokeWidth="2" />
              <text x="100" y="120" textAnchor="middle" fontSize="24" fontWeight="bold" fill="url(#shieldGrad)">
                🔐
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import './Header.css';

interface HeaderProps {
  onNavClick: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    onNavClick(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Security.Dev</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <button onClick={() => handleNavClick('hero')}>Home</button>
          <button onClick={() => handleNavClick('about')}>About</button>
          <button onClick={() => handleNavClick('skills')}>Skills</button>
          <button onClick={() => handleNavClick('experience')}>Experience</button>
          <button onClick={() => handleNavClick('projects')}>Projects</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

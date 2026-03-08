import React from 'react';
import './About.css';
import { education } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a dedicated cybersecurity professional with a passion for securing enterprise networks
            and infrastructure. Currently pursuing my Master's degree at Florida International University
            while bringing real-world security expertise from internships and current role at Miami Dade College.
          </p>
          <p>
            My journey in cybersecurity spans from vulnerability management and compliance to cloud infrastructure
            and identity management. I believe in a holistic approach to security that combines technical depth
            with strong awareness and communication skills.
          </p>
          <p>
            When I'm not securing systems, you'll find me mentoring students, contributing to security research,
            and staying current with emerging threats and best practices in the cybersecurity landscape.
          </p>

          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Workstations Secured</div>
            </div>
            <div className="stat">
              <div className="stat-number">30%</div>
              <div className="stat-label">Risk Reduction</div>
            </div>
            <div className="stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Security First</h3>
            <p>
              Vulnerability management and threat detection with hands-on experience in Rapid7,
              Cisco Secure Endpoint, and enterprise SIEM monitoring.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M9 11h6M9 15h6"></path>
              </svg>
            </div>
            <h3>Cloud & Infrastructure</h3>
            <p>
              AWS certified professional with expertise in cloud security, virtualization,
              and enterprise infrastructure design and hardening.
            </p>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Access Management</h3>
            <p>
              Expert in Active Directory, Group Policy Objects, Okta, and implementing
              least privilege access controls across enterprise environments.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
            Education
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((edu) => (
              <div
                key={edu.id}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '1.5rem 2rem',
                }}
              >
                <h4 style={{ color: 'var(--color-accent-primary)', marginBottom: '0.25rem' }}>
                  {edu.school}
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  {edu.location}
                </p>
                <p style={{ color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                  {edu.degree}
                </p>
                <p style={{ color: 'var(--color-accent-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                  {edu.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

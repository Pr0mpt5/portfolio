import React from 'react';
import './Certifications.css';
import { certifications } from '../data/portfolio';

const getCertAbbreviation = (name: string): string => {
  if (name.includes('AWS')) return 'AWS';
  if (name.includes('Security+')) return 'SEC+';
  if (name.includes('Cloud')) return 'CC';
  if (name.includes('Network')) return 'NS';
  return 'CERT';
};

const getStatusColor = (status: string): string => {
  if (status === 'active') return 'var(--color-accent-primary)';
  if (status === 'in-progress') return 'var(--color-accent-secondary)';
  return 'var(--color-accent-primary)';
};

const getStatusLabel = (status: string): string => {
  if (status === 'active') return 'Active';
  if (status === 'in-progress') return 'In Progress';
  return 'Earned';
};

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications & Credentials</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div className="cert-badge">
              <div className="badge-inner">
                <div className="cert-abbr">{getCertAbbreviation(cert.name)}</div>
              </div>
            </div>
            <div className="cert-info">
              <h3>{cert.name}</h3>
              <div className="cert-details">
                <span className="issuer">{cert.issuer}</span>
                <span className="year">{cert.year}</span>
              </div>
              <span
                style={{
                  color: getStatusColor(cert.status),
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '0.5rem',
                  display: 'inline-block',
                }}
              >
                {getStatusLabel(cert.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

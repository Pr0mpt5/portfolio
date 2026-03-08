import { Experience, Project, Certification, Skill } from '../types/index';

export const skills: Skill[] = [
  {
    category: 'Security & Compliance',
    items: [
      { name: 'Vulnerability Assessment', proficiency: 95 },
      { name: 'GRC Fundamentals', proficiency: 85 },
      { name: 'Phishing Simulation', proficiency: 90 },
      { name: 'Security Awareness Training', proficiency: 88 },
    ],
  },
  {
    category: 'Networking & Infrastructure',
    items: [
      { name: 'TCP/IP & Network Design', proficiency: 90 },
      { name: 'Firewalls & VPN', proficiency: 88 },
      { name: 'SIEM Monitoring', proficiency: 85 },
      { name: 'DNS/DHCP/VLANS', proficiency: 87 },
    ],
  },
  {
    category: 'Identity & Access Management',
    items: [
      { name: 'Active Directory & GPO', proficiency: 92 },
      { name: 'Okta & Directory Services', proficiency: 88 },
      { name: 'User & Endpoint Management', proficiency: 90 },
      { name: 'Access Control Policies', proficiency: 89 },
    ],
  },
  {
    category: 'Cloud & Scripting',
    items: [
      { name: 'AWS Infrastructure', proficiency: 90 },
      { name: 'PowerShell & Bash', proficiency: 88 },
      { name: 'Python Scripting', proficiency: 82 },
      { name: 'Azure & Microsoft 365', proficiency: 85 },
    ],
  },
];

export const additionalSkills = [
  'Rapid7', 'Cisco Secure Endpoint', 'VMware', 'Virtualbox', 'QEMU/KVM',
  'Linux', 'Wireshark', 'Nmap', 'PDQ Deploy', 'Clonezilla', 'Docker',
  'Portainer', 'CheckPoint R80', 'Cisco Packet Tracer', 'SSH/SFTP',
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Miami Dade College',
    position: 'Lead Tech Support & Tutor',
    period: 'Sept 2021 - Present',
    description: 'Lead technical support and cybersecurity initiatives at the EnTec School of Engineering and Technology, managing endpoint security for 500+ workstations and overseeing IAM administration.',
    achievements: [
      'Manage endpoint security for 500+ workstations using PDQ Deploy and Clonezilla for standardized, secure imaging',
      'Administer Group Policy Objects (GPOs) and user permissions following principle of least privilege',
      'Support cybersecurity initiatives including hackathons and workshops',
      'Provide mentorship to students and IT staff on security best practices',
    ],
  },
  {
    id: '2',
    company: 'Seed AI | AI Village at DEFCON 31',
    position: 'Information Technology Staff - CTF Event',
    period: 'August 2023',
    description: 'IT Infrastructure Staff for the world\'s largest Generative AI Red Teaming event, managing network isolation and incident response for thousands of participants.',
    achievements: [
      'Provisioned and hardened workstations ensuring total network isolation to prevent data leakage',
      'Provided rapid technical troubleshooting during the CTF maintaining platform integrity',
      'Ensured uptime and security compliance for thousands of concurrent event participants',
    ],
  },
  {
    id: '3',
    company: 'Bank United',
    position: 'NOC Analyst - Internship',
    period: 'May 2023 - July 2023',
    description: 'Network Operations Center analyst focused on incident response and security compliance in enterprise banking environment.',
    achievements: [
      'Monitored enterprise network health and security alerts with initial-level triage on connectivity issues',
      'Investigated suspicious log activity and responded to security incidents',
      'Partnered with Endpoint team to ensure remote device compliance and registration',
      'Actively participated in Change Advisory Board (CAB) assessing security impact of network modifications',
    ],
  },
  {
    id: '4',
    company: 'Miami Dade College',
    position: 'INFOSEC Analyst - Internship',
    period: 'Feb 2023 - April 2023',
    description: 'Information Security analyst focused on vulnerability management and security awareness at institutional level.',
    achievements: [
      'Utilized Rapid7 and Cisco Secure Endpoint to identify critical vulnerabilities, achieving 30% reduction in endpoint risk',
      'Engineered and launched campus-wide phishing simulations tracking metrics to identify high-risk user groups',
      'Delivered targeted security awareness training to vulnerable populations',
      'Audited system configurations ensuring alignment with institutional security policies',
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Lab: Secure Network & Domain Management',
    description: 'Architected and deployed a comprehensive virtualized enterprise network environment with advanced security controls and hardening measures.',
    technologies: ['CheckPoint R80', 'Windows Server 2019', 'VMware', 'Nmap', 'GPO'],
    impact: 'Demonstrated enterprise-grade security architecture and firewall rule validation',
    highlights: [
      'Architected virtualized enterprise network with CheckPoint R80 Firewall',
      'Implemented GPOs for comprehensive system hardening and security policy enforcement',
      'Conducted port scanning and firewall rule validation using Nmap',
      'Deployed detection alerts and security monitoring mechanisms',
    ],
  },
  {
    id: '2',
    title: 'Linux Security: Hardened NAS Implementation',
    description: 'Engineered a secure Network Attached Storage solution with encryption, access controls, and containerized services for data redundancy.',
    technologies: ['OpenMediaVault', 'Docker', 'Portainer', 'SSH/SFTP', 'Linux'],
    impact: 'Created secure infrastructure for data protection and redundancy',
    highlights: [
      'Engineered secure NAS using OpenMediaVault with hardened configuration',
      'Enforced SSH/SFTP encryption for secure file transfer',
      'Implemented granular folder-level permissions and access controls',
      'Deployed Docker containers via Portainer for secure localized services',
      'Focused on data redundancy and encryption at rest',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023-2026',
    status: 'active',
  },
  {
    id: '2',
    name: 'Enterprise Cloud Computing Certificate',
    issuer: 'Miami Dade College',
    year: '2024',
    status: 'earned',
  },
  {
    id: '3',
    name: 'Network Security Certificate',
    issuer: 'Miami Dade College',
    year: '2021',
    status: 'earned',
  },
  {
    id: '4',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    year: '2024',
    status: 'in-progress',
  },
];

export const education = [
  {
    id: '1',
    school: 'Florida International University',
    location: 'Miami, FL',
    degree: 'Master of Science in Cybersecurity',
    status: 'Expected Graduation: Dec 2027',
  },
  {
    id: '2',
    school: 'Miami Dade College',
    location: 'Miami, FL',
    degree: 'Bachelor of Science in Cybersecurity',
    status: 'Graduated: April 2024',
  },
];

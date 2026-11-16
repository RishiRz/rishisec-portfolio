
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    period: 'JUL 2026 — AUG 2026',
    title: 'Strydo Technologies Pvt. Ltd.',
    role: 'Cybersecurity Intern',
    description:
      'Performed network reconnaissance and web application security testing in lab environments using Nmap, Gobuster, Burp Suite, and Kali Linux. Practiced vulnerability assessment, web content discovery, and HTTP response analysis to identify basic vulnerabilities.',
    tags: [
      'Kali Linux',
      'Nmap',
      'Gobuster',
      'Burp Suite',
      'Wireshark',
    ],
    icon: Briefcase,
  },
  {
    period: '2023 — 2027 (EXPECTED)',
    title: 'CT University, Ludhiana',
    role: 'B.Tech — Computer Science & Engineering',
    description:
      'Pursuing a Bachelor of Technology in Computer Science and Engineering. Maintaining a CGPA of 8.1/10 through Semester 6 while developing practical skills in cybersecurity and software development.',
    tags: [
      'Computer Science',
      'Cybersecurity',
      'Software Development',
      'CGPA: 8.1/10',
    ],
    icon: GraduationCap,
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-title">
          <p className="section-label">~/experience</p>
          <h2>Experience & Education</h2>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {experience.map((item) => {
            const Icon = item.icon;

            return (
              <div className="timeline-item" key={item.title}>

                <div className="timeline-marker">
                  <Icon size={16} />
                </div>

                <div className="timeline-content">

                  <span className="timeline-period">
                    {item.period}
                  </span>

                  <h3>{item.title}</h3>

                  <p className="timeline-role">
                    {item.role}
                  </p>

                  <p className="timeline-description">
                    {item.description}
                  </p>

                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Experience;

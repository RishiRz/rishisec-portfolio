
import {
  Terminal,
  Shield,
  Globe,
  Database,
  Code2,
} from 'lucide-react';

const skills = [
  {
    name: 'Cybersecurity',
    icon: Shield,
    items: [
      'Web Reconnaissance',
      'Vulnerability Assessment',
      'Web Application Security',
      'HTTP Analysis',
      'Network Scanning',
      'Directory Enumeration',
    ],
  },
  {
    name: 'Security Tools',
    icon: Terminal,
    items: [
      'Nmap',
      'Burp Suite',
      'Gobuster',
      'Wireshark',
      'John the Ripper',
      'Hashcat',
    ],
  },
  {
    name: 'Linux & Platforms',
    icon: Terminal,
    items: [
      'Kali Linux',
      'Linux',
    ],
  },
  {
    name: 'Programming',
    icon: Code2,
    items: [
      'Python',
      'JavaScript',
      'TypeScript',
      'PHP',
      'SQL',
    ],
  },
  {
    name: 'Development',
    icon: Database,
    items: [
      'FastAPI',
      'React',
      'REST APIs',
      'Scikit-learn',
      'pytest',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    name: 'Web Technologies',
    icon: Globe,
    items: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Web Applications',
      'Frontend Development',
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <p className="section-label">
            ~/skills
          </p>

          <h2>
            Cybersecurity Arsenal
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                className="skill-card"
                key={skill.name}
              >
                <div className="skill-header">
                  <Icon size={22} />

                  <h3>
                    {skill.name}
                  </h3>
                </div>

                <div className="skill-list">
                  {skill.items.map((item) => (
                    <span key={item}>
                      <span className="skill-prefix">
                        &gt;
                      </span>

                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

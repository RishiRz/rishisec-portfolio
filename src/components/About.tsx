import { Terminal, Shield, Code2 } from 'lucide-react';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title">
          <p className="section-label">~/about</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <span>about.sh</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="green">$ whoami</span>
              </p>
              <p className="terminal-output">
                Rishiraj Deka, aspiring junior penetration tester
              </p>

              <p>
                <span className="green">$ cat introduction.txt</span>
              </p>
              <p className="terminal-output">
                B.Tech CSE student at CT University (graduating 2027) focused on
                web application security, reconnaissance, and vulnerability
                assessment.
              </p>
              <p className="terminal-output">
                I built ReconX, a Python web content discovery tool, and
                PhishGuard, a machine learning phishing detector with 98.18%
                accuracy.
              </p>

              <p>
                <span className="green">$ cat achievements.txt</span>
              </p>
              <p className="terminal-output">
                TryHackMe top 8% globally | 68+ rooms | 7 badges
              </p>
              <p className="terminal-output">
                Cybersecurity intern at Strydo Technologies (Jul - Aug 2026)
              </p>

              <p>
                <span className="green">$ status</span>
              </p>
              <p className="terminal-output green">
                Open to junior pentester roles. India and remote.
              </p>

              <span className="cursor">█</span>
            </div>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">
                <Shield />
              </div>
              <div>
                <h3>Security Testing</h3>
                <p>
                  Hands-on network reconnaissance, web application testing, and
                  vulnerability assessment with Nmap, Burp Suite, Gobuster,
                  and Kali Linux.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <Terminal />
              </div>
              <div>
                <h3>Security Tooling</h3>
                <p>
                  Built ReconX, a Gobuster-inspired Python CLI with wildcard
                  detection, rate limiting, scan profiles, report export, and
                  a pytest suite.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <Code2 />
              </div>
              <div>
                <h3>Full-Stack and ML</h3>
                <p>
                  Developed PhishGuard with Scikit-learn, FastAPI, React, and
                  PostgreSQL, trained on 9,469 emails with a 97.74% macro F1.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
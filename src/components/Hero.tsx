import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import MatrixRain from "./MatrixRain";

function Hero() {
  return (
    <section className="hero">
      <MatrixRain fullscreen={false} />
      <div className="hero-grid" />

      <div className="hero-content">
        {/* System Status */}
        <motion.div
          className="terminal-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="status-dot" />
          RISHISEC // SYSTEM ONLINE
        </motion.div>

        {/* Terminal Command */}
        <motion.p
          className="hero-command"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          root@rishisec:~$ whoami
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          RISHIRAJ
          <span>.DEKA</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Aspiring Penetration Tester
        </motion.h2>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Cybersecurity enthusiast focused on web application security,
          penetration testing, and vulnerability assessment. I build security
          tools like ReconX and PhishGuard while exploring new ways to make the
          digital world more secure.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a href="#projects" className="btn btn-primary">
            ./explore-projects
          </a>

          <a
            href="/Rishiraj_Deka_RESUME.pdf"
            className="btn btn-secondary"
            download="Rishiraj_Deka_RESUME.PDF"
          >
            <Download size={17} />
            download_cv
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://github.com/RishiRz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">&lt;/&gt;</span>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rishiraj-deka-56aab4332/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">in</span>
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <span>scroll_down</span>
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

export default Hero;

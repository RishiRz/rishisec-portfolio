import { Terminal } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <a href="#" className="logo">
          <Terminal size={18} />
          <span>
            rishi<span className="accent">.Sec</span>
          </span>
        </a>

        <p className="footer-text">
          <span className="green">(c)</span> {new Date().getFullYear()} Rishiraj
          Deka — designed and built with <span className="green">{'</>'}</span>{' '}
          and lots of coffee
        </p>

        <p className="footer-signature">
          <span className="green">$</span> exit 0
        </p>
      </div>
    </footer>
  );
}

export default Footer;
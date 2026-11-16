import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Backend-free submission: open the visitor's email client with the
    // message pre-filled, then show the terminal-style success state.
    const subject = encodeURIComponent(`[rishi.dev] message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:rishirajdekaofficial@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <p className="section-label">~/contact</p>
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <p className="contact-lead">
              Have a project in mind, found a vulnerability, or just want to
              talk security? My inbox is always open.
            </p>

            <a
              href="mailto:rishirajdekaofficial@gmail.com"
              className="contact-item"
            >
              <Mail size={20} />
              <div>
                <span className="contact-item-label">email</span>
                <span>rishirajdekaofficial@gmail.com</span>
              </div>
            </a>

            <div className="contact-item">
              <MapPin size={20} />
              <div>
                <span className="contact-item-label">location</span>
                <span>India</span>
              </div>
            </div>

            <div className="contact-terminal">
              <p>
                <span className="green">$</span> ping rishi.Sec
              </p>
              <p className="contact-terminal-output green">
                ✓ connection established — response time: instant
              </p>
              <span className="cursor">█</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="form-success">
                <p>
                  <span className="green">$</span> send --message
                </p>
                <p className="green">
                  ✓ message transmitted successfully. I'll get back to
                  you soon!
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', email: '', message: '' });
                  }}
                >
                  send_another
                </button>
              </div>
            ) : (
              <>
                <div className="form-field">
                  <label htmlFor="name">
                    <span className="green">$</span> name:
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="your_name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    <span className="green">$</span> email:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">
                    <span className="green">$</span> message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="type your message..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  <Send size={16} />
                  ./send-message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
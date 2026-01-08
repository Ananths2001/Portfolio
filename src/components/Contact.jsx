import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_vxzlsej';
    const TEMPLATE_ID = 'template_2mh3akz';
    const PUBLIC_KEY = 'OhFSVRNIT-mkzIeop';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
          form.current.reset();
          // Clear success message after 5 seconds
          setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        },
        (error) => {
          setLoading(false);
          console.error('FAILED...', error.text);
          setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        },
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p className="contact-text">
              I'm always open to discussing web development work or partnership opportunities.
            </p>
            
            <div className="info-item">
              <div className="icon-box"><Phone size={24} /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 6382967596</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box"><Mail size={24} /></div>
              <div>
                <h4>Email</h4>
                <p>ananthananth1863@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box"><MapPin size={24} /></div>
              <div>
                <h4>Location</h4>
                <p>Tirunelveli, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="from_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="from_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            
            {status.message && (
                <div className={`status-message ${status.type}`}>
                    {status.message}
                </div>
            )}

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ananth. All Rights Reserved.</p>
        <p className="made-with">Made with ❤️ using React</p>
      </footer>
    </section>
  );
};

export default Contact;

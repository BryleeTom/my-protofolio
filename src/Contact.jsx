import React, { useState } from 'react';
import logo from './assets/Logo/my_logo.svg'
import Header from './Header';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    setTimeout(() => {
      setResponseMessage('Thank you! Your message has been sent successfully.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <Header />
      <section className="contact-page">
        <div className="profile-card">
          <img src={logo} alt="Profile" className="profile-img" />
          <h2>Your Name</h2>
          <p>Web Developer | App Development</p>
          <p>
            Passionate about building amazing web experiences. Feel free to reach out for
            collaborations or questions.
          </p>
          <div className="social-links">
            <a href="https://github.com/BryleeTom" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="muhammadasrin0507@gmail.com">Email</a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {responseMessage && (
            <div
              className={`response-message ${
                responseMessage.includes('successfully') ? 'success' : 'error'
              }`}
            >
              {responseMessage}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Contact;

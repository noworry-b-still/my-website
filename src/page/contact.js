import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaClock } from "react-icons/fa";
import { Handshake, AlertCircle } from "lucide-react";
import "./contact.css";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Accessing environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setIsSubmitted(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
        setError("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="title-wrapper">
          <h1 className="contact-title">
            <Handshake size={36} className="connect-icon" />
            Connect With Me
            <div className="title-underline"></div>
          </h1>
        </div>
        <p className="subtitle">Let's collaborate on something amazing! Reach out through social media or send me a message directly.</p>
      </div>

      {/* Content */}
      <div className="contact-content">
        {/* Social Connect Section */}
        <div className="social-connect">
          <h2 className="section-title">Find Me Online</h2>

          <div className="social-buttons">
            <a
              href="https://github.com/noworry-b-still"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button github"
            >
              <FaGithub className="icon" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dinesh-pandikona/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button linkedin"
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
          </div>

          <div className="contact-availability">
            <h3 className="availability-title">
              <FaClock className="availability-icon" />
              Availability
            </h3>
            <p className="availability-details">
              I typically respond within 24-48 hours. For urgent inquiries, please mention it in your message.
            </p>
          </div>

          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <h2 className="section-title">Send a Message</h2>

          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Message Sent Successfully!</h3>
              <p className="success-subtitle">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                ></textarea>
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    Sending
                    <span className="loading-dots">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </span>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {error && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons
import "./contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setIsLoading(true); // Set loading to true

    // Accessing environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setIsSubmitted(true);
        form.current.reset(); // Clear form fields after submission
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
        setError("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false
      });
  };

  return (
    <div className="contact-container">
      <h1 style={{ textAlign: "center" }}>Connect With Me</h1>
      <div className="contact-info">
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
      </div>
      <hr /> {/* Separator */}
      <div className="contact-form">
        {isSubmitted ? (
          <div className="success-message">
            <h3>Thank you for your message!</h3>
            <p>I'll get back to you soon.</p>
          </div>
        ) : (
          <form ref={form} onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="user_name" required />
            </label>
            <label>
              Email:
              <input type="email" name="user_email" required />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                rows="5"
                required
                style={{ resize: "none", overflow: "hidden" }} // Prevent resizing
              ></textarea>
            </label>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;

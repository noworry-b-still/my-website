import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

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
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
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
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit">Send Message</button>
          </form>
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="contact-info">
        <p>You can also reach me at:</p>
        <ul>
          <li>
            <span role="img" aria-label="email">
              ✉️
            </span>{" "}
            Email:{" "}
            <a href="mailto:pandikona.d@northeastern.edu">
              pandikona.d@northeastern.edu
            </a>
          </li>
          <li>
            <span role="img" aria-label="github">
              🐱
            </span>{" "}
            GitHub:{" "}
            <a
              href="https://github.com/dineshpandikona"
              target="_blank"
              rel="noopener noreferrer"
            >
              dineshpandikona
            </a>
          </li>
          <li>
            <span role="img" aria-label="linkedin">
              🔗
            </span>{" "}
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/dinesh-pandikona/"
              target="_blank"
              rel="noopener noreferrer"
            >
              dinesh-pandikona
            </a>
          </li>
        </ul>
      </div>
      <div className="thug-life-quote">
        <div>
          <p>कर्मण्येवाधिकारस्तेमाफलेषुकदाचन |</p>
          <p>माकर्मफलहेतुर्भूर्मातेसङ्गोऽस्त्वकर्मणि ||</p>
        </div>
        <div>
          <p>karmaṇyevādhikāraste mā phaleṣhu kadāchana</p>
          <p>mā karma-phala-hetur bhūr mā te saṅgo ’stvakarmaṇi</p>
        </div>
        <div>
          You have a right to perform your prescribed duties, but you are not
          entitled to the fruits of your actions. Never consider yourself to be
          the cause of the results of your activities, nor be attached to
          inaction.
        </div>
        <p>- Lord Krishna</p>
      </div>
    </div>
  );
};

export default Contact;

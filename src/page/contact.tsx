import "./contact.css";
// import contact_image from "../images/website-contact.jpeg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="thank-you">
        <h1>Hey there, thanks for stopping by!</h1>
        <p>
          You've just stepped into the realm of endless possibilities. Feel free
          to reach out to me via any of the following channels. Let's connect,
          create, and conquer together!
        </p>
      </div>
      <div className="contact-options">
        <p>Get in touch:</p>
        <ul>
          <li>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            Mobile: +1 (857) 397-3775
          </li>
          <li>
            <span role="img" aria-label="email">
              ✉️
            </span>{" "}
            Email: pandikona.d@northeastern.edu
          </li>
          <li>
            <span role="img" aria-label="linkedin">
              🔗
            </span>{" "}
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/dinesh-pandikona/"
              target="_blank"
            >
              dinesh-pandikona
            </a>
          </li>
        </ul>
      </div>
      <div className="border" />
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
{
  /* <img
        className="contact-image"
        src={contact_image}
        alt="Bharat's temple"
      /> */
}

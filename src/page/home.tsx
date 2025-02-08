import profilePic from "../images/profile-pic.png";
import ScrollButton from "../ui/comp/scrollButton/ScrollButton";
import Intro from "../ui/comp/intro/Intro";
import Certificates from "./certificates";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img
          src={profilePic}
          className="fixed-profile-pic"
          alt="Profile"
          style={{ border: "2px solid #5a2d82" }}
        />
        <div className="profile-details">
          <Intro />

          <h2 className="journey-title">Journey So Far</h2>
          <ul className="journey-list">
            <li><strong>2025:</strong>
              <ul>
                <li className="journey-text">
                  <span className="highlight">May:</span> Seeking full-time
                  <em> software engineering roles </em> in the U.S.
                </li>
                <li className="journey-text">
                  <span className="highlight">CGPA:</span> 3.75/4
                </li>
              </ul>
            </li>
            <li><strong>2024:</strong>
              <ul>
                <li className="journey-text">
                  - Earned <span className="highlight">Redis Professional Certification</span>.
                </li>
                <li className="journey-text">
                  - Interned at <span className="highlight">Bose Professional</span>, working on
                  <em> distributed systems </em> with <span className="highlight">Go</span> and <span className="highlight">Elixir</span>.
                </li>
              </ul>
            </li>
            <li><strong>2023:</strong>
              <ul>
                <li className="journey-text">
                  - Left <span className="highlight">Deloitte</span> to pursue
                  <em> Master's in CS </em> at Northeastern University, Boston.
                </li>
              </ul>
            </li>
            <li><strong>2022:</strong>
              <ul>
                <li className="journey-text">
                  - Completed <span className="highlight">4-month Analyst Internship</span> at <span className="highlight">Deloitte</span>.
                </li>
                <li className="journey-text">
                  - Graduated with <span className="highlight">8.3/10 GPA</span> from
                  <span className="highlight">VNR VJIET</span>.
                </li>
                <li className="journey-text">
                  - Joined <span className="highlight">Deloitte</span> as a
                  <em> full-time Analyst </em>, working with <span className="highlight">Python</span>,
                  <span className="highlight">Java</span>, and <em> Relativity tools</em>.
                </li>
              </ul>
            </li>
            <li><strong>2021:</strong>
              <ul>
                <li className="journey-text">
                  - Interned at <span className="highlight">Blaze Automations</span>, worked on
                  <em> time forecasting </em> for elderly care.
                </li>
                <li className="journey-text">
                  - Contributed to a <em> published research paper </em>, recognized by <span className="highlight">CEO</span>.
                </li>
                <li className="journey-text">
                  - Failed <span className="highlight">Amazon SWE</span> final round but secured an
                  <em> Analyst internship + full-time role </em> at <span className="highlight">Deloitte</span>.
                </li>
              </ul>
            </li>
            <li><strong>2020:</strong>
              <ul>
                <li className="journey-text">
                  - Interned remotely at <span className="highlight">MithyaLabs</span> as a <em> Software Engineer </em>.
                </li>
                <li className="journey-text">
                  - Explored <em> Machine Learning </em> and <em> Data Science/Kaggle</em>.
                </li>
                <li className="journey-text">
                  - Suffered from <span className="highlight">dengue</span>, affecting semester performance.
                </li>
              </ul>
            </li>
            <li><strong>2019:</strong>
              <ul>
                <li className="journey-text">
                  - Won multiple <span className="highlight">entrepreneurship competitions</span>,
                  <span className="highlight">college hackathon</span>, and <span className="highlight">Univ.ai hackathon</span>.
                </li>
                <li className="journey-text">
                  - Developed an <em> AR-based indoor navigation app </em>.
                </li>
                <li className="journey-text">
                  - Built a <em> RESTful backend </em> for a food recipe app using
                  <span className="highlight">Python</span> and <span className="highlight">Django</span>.
                </li>
              </ul>
            </li>
            <li><strong>2018:</strong>
              <ul>
                <li className="journey-text">
                  - Secured <span className="highlight">1869 rank</span> among
                  <span className="highlight"> 300K+ students</span> in <span className="highlight">Telangana EAMCET</span>.
                </li>
                <li className="journey-text">
                  - Earned a <span className="highlight">full merit scholarship</span> for
                  <em> Bachelor's in CS </em> at <span>VNR VJIET</span>.
                </li>
                <li className="journey-text">
                  - Played <em> soccer </em> and explored <em> frontend development </em>.
                </li>
              </ul>
            </li>
          </ul>
          <div className="certificates-wrapper">
            <Certificates />
          </div>
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}

export default Home;

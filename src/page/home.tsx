import profilePic from "../images/profile-pic.png";
import ScrollButton from "../ui/comp/scrollButton/ScrollButton";
import Certificates from "./certificates";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img src={profilePic} className="fixed-profile-pic" alt="Profile" />
        <div className="profile-details">
          <ul>
            <li><strong>2025:</strong> In May, about to graduate and looking for full-time roles in the United States</li>
            <li><strong>2024:</strong> Interned at Bose Professional as a Software Engineer</li>
            <li><strong>2023:</strong> Decided to do a Master's in CS at Northeastern, Boston</li>
            <li><strong>2022:</strong> Interned at Deloitte as an Analyst, joined Deloitte as a full-time Analyst</li>
            <li><strong>2021:</strong> Interned at Blaze Automations as a SWE</li>
            <li><strong>2020:</strong> Interned at Mithyalabs as a SWE</li>
            <li><strong>2018:</strong> Started Bachelor's in CS</li>
          </ul>
          <Certificates />
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}

export default Home;

import profilePic from "../images/profile-pic.png";
import ScrollButton from "../ui/comp/scrollButton/ScrollButton";
import Intro from "../ui/comp/intro/Intro";
import Certificates from "./certificates";
import Timeline from "../ui/comp/timeline/Timeline"; // Import the new Timeline component
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

          {/* Replace the old journey list with the new Timeline component */}
          <Timeline />

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
import React, { useState } from 'react';
import Intro from "../ui/comp/intro/Intro";
import Certificates from "./certificates";
import Timeline from "../ui/comp/timeline/Timeline";
import ScrollButton from "../ui/comp/scrollButton/ScrollButton";
import "./home.css";
import GeneratedAudioBackground from '../ui/comp/generated_audio/GeneratedAudioBackground';

function Home() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [audioControlsVisible, setAudioControlsVisible] = useState(false);

  // Set background as loaded after a delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle audio controls visibility change
  const handleAudioVisibilityChange = (isVisible) => {
    setAudioControlsVisible(isVisible);
  };

  return (
    <>
      <GeneratedAudioBackground onVisibilityChange={handleAudioVisibilityChange} />

      <div className="home-container">
        <div className="profile-section">
          <div className="profile-details">
            <Intro />

            <Timeline />

            <div className="certificates-wrapper">
              <Certificates />
            </div>
          </div>
        </div>
        <ScrollButton audioControlsVisible={audioControlsVisible} />
      </div>
    </>
  );
}

export default Home;